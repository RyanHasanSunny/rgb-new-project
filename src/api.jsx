// src/api.jsx
import { db } from './firebaseConfig';
import { collection, getDocs, updateDoc } from 'firebase/firestore';

export const getContent = async () => {
  const snapshot = await db.collection('yourCollection').get(); // Change 'yourCollection' to your actual Firestore collection name
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateContent = async (id, newData) => {
  await db.collection('yourCollection').doc(id).update({ text: newData }); // Adjust the field as necessary
};

export const fetchSkills = async () => {
  try {
    const aboutDoc = await getDocs(collection(db, "about"));
    if (!aboutDoc.empty) {
      const aboutData = aboutDoc.docs[0].data();
      return aboutData.skills || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching skills: ", error);
    return [];
  }
};


