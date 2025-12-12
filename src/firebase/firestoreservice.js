import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  where,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './config';

// Collection names
const BOOKINGS_COLLECTION = 'bookings';
const EVENTS_COLLECTION = 'events';
const PAYMENTS_COLLECTION = 'payments';

// ============= BOOKINGS =============

// Create a new booking
export const createBooking = async (bookingData, userId) => {
  try {
    const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), {
      ...bookingData,
      userId: userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, ...bookingData };
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

// Get all bookings for a user
export const getUserBookings = async (userId) => {
  try {
    const q = query(
      collection(db, BOOKINGS_COLLECTION),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
    return bookings;
  } catch (error) {
    console.error('Error getting user bookings:', error);
    throw error;
  }
};

// Get a single booking by ID
export const getBookingById = async (bookingId) => {
  try {
    const docRef = doc(db, BOOKINGS_COLLECTION, bookingId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Booking not found');
    }
  } catch (error) {
    console.error('Error getting booking:', error);
    throw error;
  }
};

// Update a booking
export const updateBooking = async (bookingId, updateData) => {
  try {
    const docRef = doc(db, BOOKINGS_COLLECTION, bookingId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
    return { id: bookingId, ...updateData };
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

// Delete a booking
export const deleteBooking = async (bookingId) => {
  try {
    await deleteDoc(doc(db, BOOKINGS_COLLECTION, bookingId));
    return bookingId;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

// ============= PAYMENTS =============

// Create a payment record
export const createPayment = async (paymentData, userId) => {
  try {
    const docRef = await addDoc(collection(db, PAYMENTS_COLLECTION), {
      ...paymentData,
      userId: userId,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...paymentData };
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};

// Get payment by booking ID
export const getPaymentByBookingId = async (bookingId) => {
  try {
    const q = query(
      collection(db, PAYMENTS_COLLECTION),
      where('bookingId', '==', bookingId)
    );
    const querySnapshot = await getDocs(q);
    const payments = [];
    querySnapshot.forEach((doc) => {
      payments.push({ id: doc.id, ...doc.data() });
    });
    return payments[0] || null;
  } catch (error) {
    console.error('Error getting payment:', error);
    throw error;
  }
};

// Update payment status
export const updatePaymentStatus = async (paymentId, status) => {
  try {
    const docRef = doc(db, PAYMENTS_COLLECTION, paymentId);
    await updateDoc(docRef, {
      status: status,
      updatedAt: serverTimestamp()
    });
    return { id: paymentId, status };
  } catch (error) {
    console.error('Error updating payment status:', error);
    throw error;
  }
};

// ============= EVENTS =============

// Get all events
export const getAllEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, EVENTS_COLLECTION));
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  } catch (error) {
    console.error('Error getting events:', error);
    throw error;
  }
};

// Get event by ID
export const getEventById = async (eventId) => {
  try {
    const docRef = doc(db, EVENTS_COLLECTION, eventId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Event not found');
    }
  } catch (error) {
    console.error('Error getting event:', error);
    throw error;
  }
};

// Create a new event (for organizers)
export const createEvent = async (eventData, organizerId) => {
  try {
    const docRef = await addDoc(collection(db, EVENTS_COLLECTION), {
      ...eventData,
      organizerId: organizerId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, ...eventData };
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Update an event
export const updateEvent = async (eventId, updateData) => {
  try {
    const docRef = doc(db, EVENTS_COLLECTION, eventId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
    return { id: eventId, ...updateData };
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (eventId) => {
  try {
    await deleteDoc(doc(db, EVENTS_COLLECTION, eventId));
    return eventId;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};