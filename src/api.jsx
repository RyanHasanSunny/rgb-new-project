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

export const fetchContactInfo = async () => {
  try {
    const contactDoc = await getDocs(collection(db, "contact"));
    if (!contactDoc.empty) {
      const contactData = contactDoc.docs[0].data();
      return contactData;
    }
    return { email: "", phone: "", address: "" };
  } catch (error) {
    console.error("Error fetching contact info: ", error);
    return { email: "", phone: "", address: "" };
  }
};

export const fetchIntroduction = async () => {
  try {
    const introDoc = await getDocs(collection(db, "introductionDocId"));
    if (!introDoc.empty) {
      const introData = introDoc.docs[0].data();
      return introData;
    }
    return { name: "", linkedin: "", facebook: "", instagram: "", artstation: "" };
  } catch (error) {
    console.error("Error fetching introduction: ", error);
    return { name: "", linkedin: "", facebook: "", instagram: "", artstation: "" };
  }
};


