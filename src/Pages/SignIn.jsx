import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../firebase/Authcontext";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const { signin, signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await signin(email, password);
      toast.success("Successfully signed in!");
      setTimeout(() => {
        navigate("/events");
      }, 1000);
    } catch (error) {
      console.error("Sign in error:", error);
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format");
      } else {
        toast.error("Failed to sign in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Successfully signed in with Google!");
      setTimeout(() => {
        navigate("/events");
      }, 1000);
    } catch (error) {
      console.error("Google sign in error:", error);
      toast.error("Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      await signInWithFacebook();
      toast.success("Successfully signed in with Facebook!");
      setTimeout(() => {
        navigate("/events");
      }, 1000);
    } catch (error) {
      console.error("Facebook sign in error:", error);
      toast.error("Failed to sign in with Facebook");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <Toaster position="top-center" />
      
      <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome back!</h2>
        <p className="text-center mb-6">We're glad to see you again 👋</p>

        <div className="space-y-4">
          <button
            onClick={handleFacebookSignIn}
            disabled={loading}
            className="w-full border border-gray-300 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Continue with Facebook</span>
          </button>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full border border-gray-300 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            disabled={loading}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl mt-6 font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-blue-600 cursor-pointer hover:underline">
          Forgot your password?
        </p>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}