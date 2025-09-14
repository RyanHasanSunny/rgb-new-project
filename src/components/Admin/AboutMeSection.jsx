import React, { useEffect, useState } from 'react';
import { db, storage } from '../../firebaseConfig';
import { collection, updateDoc, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import '../../styles/AdminPanel.css';


const AboutMeSection = () => {
  // About Me state
  const [aboutMe, setAboutMe] = useState({
    name: "",
    experience: "",
    projects: "",
    clients: "",
    hours: "",
    description: "",
    skills: [],
    experiences: [],
    education: [],
    imageUrl: "",
    titleLine: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch all data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch About Me (including experiences, education, and contact)
        const aboutSnapshot = await getDocs(collection(db, "about"));
        if (!aboutSnapshot.empty) {
          const aboutData = aboutSnapshot.docs[0].data();
          setAboutMe(aboutData);
        }
      } catch (error) {
        setError("Error fetching data: " + error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSaveAboutMe = async () => {
    try {
      const docRef = doc(db, "about", "aboutDocId");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, aboutMe);
      } else {
        await setDoc(docRef, aboutMe);
      }
      alert("About Me updated successfully!");
      // Optionally, you can fetch the updated data again to ensure the state is up-to-date
      const updatedDocSnap = await getDoc(docRef);
      setAboutMe(updatedDocSnap.data());
    } catch (error) {
      setError("Error saving About Me: " + error.message);
      console.error("Error saving About Me: ", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const storageRef = ref(storage, `aboutImages/${file.name}_${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Progress can be handled here if needed
      }, 
      (error) => {
        setError("Error uploading image: " + error.message);
        setUploading(false);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAboutMe(prev => ({ ...prev, imageUrl: downloadURL }));
          setUploading(false);
        });
      }
    );
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <section className="admin-sections">
      <h2>Edit About Me</h2>
      <div className="content">
        <label>Name</label>
        <input
          type="text"
          value={aboutMe.name}
          onChange={(e) => setAboutMe({ ...aboutMe, name: e.target.value })}
          placeholder="Name"
        />
        <label>Years of Experience</label>
        <input
          type="text"
          value={aboutMe.experience}
          onChange={(e) => setAboutMe({ ...aboutMe, experience: e.target.value })}
          placeholder="Years of Experience"
        />
        <label>Projects Completed</label>
        <input
          type="text"
          value={aboutMe.projects}
          onChange={(e) => setAboutMe({ ...aboutMe, projects: e.target.value })}
          placeholder="Projects Completed"
        />
        <label>Clients</label>
        <input
          type="text"
          value={aboutMe.clients}
          onChange={(e) => setAboutMe({ ...aboutMe, clients: e.target.value })}
          placeholder="Clients"
        />
        <label>Hours of Designing</label>
        <input
          type="text"
          value={aboutMe.hours}
          onChange={(e) => setAboutMe({ ...aboutMe, hours: e.target.value })}
          placeholder="Hours of Designing"
        />
        <label>About Me Description</label>
        <textarea
          value={aboutMe.description}
          onChange={(e) => setAboutMe({ ...aboutMe, description: e.target.value })}
          placeholder="About Me Description"
          rows={5}
        />
        <label>Title Line</label>
        <input
          type="text"
          value={aboutMe.titleLine || ""}
          onChange={(e) => setAboutMe({ ...aboutMe, titleLine: e.target.value })}
          placeholder="Title Line (e.g. Graphic Designer || Game Developer || Web Designer)"
        />
        <label>Profile Image Upload</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={uploading}
        />
        {uploading && <p>Uploading image...</p>}
        {aboutMe.imageUrl && !uploading && (
          <img src={aboutMe.imageUrl} alt="Profile Preview" style={{ width: '100px', marginTop: '10px' }} />
        )}
        <button className="button" onClick={handleSaveAboutMe} disabled={uploading}>Save About Me</button>
      </div>
    </section>
  );
};

export default AboutMeSection;
