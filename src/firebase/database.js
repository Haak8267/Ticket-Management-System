import { db } from "./config";
import { collection, addDoc, getDocs } from "firebase/firestore";

// ADD NEW EVENT
export const createEvent = async (eventData) => {
  try {
    const docRef = await addDoc(collection(db, "events"), eventData);
    return { id: docRef.id };
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
};

// GET ALL EVENTS
export const getAllEvents = async () => {
  try {
    const snapshot = await getDocs(collection(db, "events"));
    const events = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
