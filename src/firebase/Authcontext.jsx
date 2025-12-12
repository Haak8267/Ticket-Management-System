import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth, db } from './config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  const signup = async (email, password, displayName, userType = 'user') => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName: displayName
      });

      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: email,
        displayName: displayName,
        userType: userType,
        createdAt: new Date().toISOString(),
        photoURL: userCredential.user.photoURL || null
      });

      return userCredential;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  // Sign in function
  const signin = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  };

  // Sign out function
  const logout = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  // Google Sign In
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Check if user document exists, if not create one
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          userType: 'user',
          createdAt: new Date().toISOString(),
          photoURL: result.user.photoURL
        });
      }
      
      return result;
    } catch (error) {
      console.error('Google sign in error:', error);
      throw error;
    }
  };

  // Facebook Sign In
  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Check if user document exists, if not create one
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          userType: 'user',
          createdAt: new Date().toISOString(),
          photoURL: result.user.photoURL
        });
      }
      
      return result;
    } catch (error) {
      console.error('Facebook sign in error:', error);
      throw error;
    }
  };

  // Get user data from Firestore
  const getUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        return userDoc.data();
      }
      return null;
    } catch (error) {
      console.error('Get user data error:', error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get additional user data from Firestore
        const userData = await getUserData(user.uid);
        setCurrentUser({ ...user, ...userData });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    signInWithGoogle,
    signInWithFacebook,
    getUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};