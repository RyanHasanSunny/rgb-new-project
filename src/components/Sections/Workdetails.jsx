import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Workingdetails = () => {
  const [aboutData, setAboutData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [imageUrl, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setTriggerAnimation(false); // Reset
      setTimeout(() => setTriggerAnimation(true), 50); // Trigger again
    }
  }, [inView]);

  const fetchData = async (collection, docId, setData) => {
    try {
      const docRef = doc(db, collection, docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        setError(`${collection} data not found. Please check the database.`);
      }
    } catch (error) {
      setError(`Error fetching ${collection} data: ${error.message}`);
      console.error(`Error fetching ${collection} data: `, error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchData("about", "aboutDocId", setAboutData);
      await fetchData("contact", "contactDocId", setContactData);
      await fetchData("introductionDocId", "BXORMSgnVvlVBbczIC7J", setImageData);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) return <div className="loading-spinner">Loading About Me...</div>;
  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <section id="aboutme">
      <div id="aboutme-content">
        <div className="home-content-header">
          <div id="text-content">
            <div
              ref={ref}
              id="workingdetails"
              className="grid grid-cols-1 sm:grid-cols-2 h-full md:grid-cols-4 gap-6 mt-8 p-6 shadow-lg"
              style={{ backgroundColor: "rgba(26, 27, 26, 0.07)" }}
            >
              {/* Experience */}
              <div className="Experience text-white p-5 shadow-md hover:shadow-xl transition duration-300 text-center">
                <h2 className="text-xl font-semibold text-gray-400 uppercase tracking-wide ">
                  Year of Experience
                </h2>
                <p className="text-4xl font-bold mt-2 break-words" style={{ color: "rgba(182, 182, 182, 0.92)" }}>
                  {triggerAnimation && (
                    <CountUp end={parseInt(aboutData?.experience) || 3} duration={2} />)}
                  +
                </p>
              </div>

              {/* Projects */}
              <div className="Project-Completed text-white p-5 shadow-md hover:shadow-xl transition duration-300 text-center">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Project Completed
                </h2>
                <p className="text-4xl font-bold mt-2 break-words" style={{ color: "rgba(182, 182, 182, 0.92)" }}>
                  {triggerAnimation && (
                    <CountUp end={parseInt(aboutData?.projects) || 20} duration={2} />)}
                  +
                </p>
              </div>

              {/* Clients */}
              <div className="Clients text-white p-5 shadow-md hover:shadow-xl transition duration-300 text-center">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide ">
                  Clients
                </h2>
                <p className="text-4xl font-bold mt-2 break-words" style={{ color: "rgba(182, 182, 182, 0.92)" }}>
                  {triggerAnimation && (
                    <CountUp end={parseInt(aboutData?.clients) || 10} duration={2} />)}
                  +
                </p>
              </div>

              {/* Hours */}
              <div className="Hours text-white p-5 shadow-md hover:shadow-xl transition duration-300 text-center">
                <h2 className="text-center font-semibold text-gray-400 uppercase tracking-wide ">
                  Hours of Designing
                </h2>
                <p
                  className="text-4xl font-bold mt-2 break-words"
                  style={{ color: "rgba(182, 182, 182, 0.92)", textAlign: "center" }}
                >
                  {triggerAnimation && (
                    <CountUp end={parseInt(aboutData?.hours) || 10000} duration={2.5} />)}
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workingdetails;
