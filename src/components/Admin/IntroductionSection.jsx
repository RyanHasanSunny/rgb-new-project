import React, { useEffect, useState } from 'react';

import { db } from '../../firebaseConfig';
import { collection, updateDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { fetchIntroduction } from '../../api';
import '../../styles/AdminPanel.css';

const IntroductionSection = () => {

  const [introductionInfo, setIntroductionInfo] = useState({
    name: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    artstation: ""
  });









  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIntroduction();
        setIntroductionInfo(data);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);















  // Save introduction data
  // const handleSaveIntroduction = async () => {
  //   try {
  //     const introData = { name, linkedin, facebook, instagram, artstation };
  //     const docRef = doc(db, "introductionDocId", "BXORMSgnVvlVBbczIC7J"); // Replace with your document ID
  //     await updateDoc(docRef, introData);
  //     alert("Introduction saved successfully!");
  //   } catch (error) {
  //     setError("Error updating introduction: " + error.message);
  //     console.error("Error updating introduction: ", error);
  //   }
  // };


    const handleSaveIntroduction = async () => {
      try {
        const docRef = doc(db, "introductionDocId", "BXORMSgnVvlVBbczIC7J"); // Replace with your document ID
        await setDoc(docRef, introductionInfo);
        alert("introduction information saved successfully!");
      } catch (error) {
        setError("Error saving introduction information: " + error.message);
        console.error("Error saving introduction information: ", error);
      }
    };






  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (

    <section className="admin-sections">
      <h2>Edit Introduction</h2>
      <div className="content">
        <label>Name</label>
        <input type="text"
          value={introductionInfo.name}
          onChange={(e) => setIntroductionInfo({ ...introductionInfo, name: e.target.value })}
          placeholder="Name"
        />

        <label>LinkedIn</label>
        <input type="text" value={introductionInfo.linkedin} onChange={(e) => setIntroductionInfo({ ...introductionInfo, linkedin: e.target.value })} />
        <label>Facebook</label>
        <input type="text" value={introductionInfo.facebook} onChange={(e) => setIntroductionInfo({ ...introductionInfo, facebook: e.target.value })} />
        <label>Instagram</label>
        <input type="text" value={introductionInfo.instagram} onChange={(e) => setIntroductionInfo({ ...introductionInfo, instagram: e.target.value })} />
        <label>ArtStation</label>
        <input type="text" value={introductionInfo.artstation} onChange={(e) => setIntroductionInfo({ ...introductionInfo, artstation: e.target.value })} />
        <button className="button" onClick={handleSaveIntroduction}>Save Introduction</button>
      </div>
    </section>
  );
};

export default IntroductionSection;