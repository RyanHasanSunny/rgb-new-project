import React, { useEffect, useState } from "react";
import FeatureItems from "../Container/Items_Container/FeatureItems"; // Renamed from PortfolioItem
import "../../styles/FeatureSection.css"; // Rename this CSS too if needed
import { db } from "../../firebaseConfig";
import SectionContainer from "../Container/Section_Container/Section_Container"; // Assuming you have a SectionContainer component
import { collection, getDocs } from "firebase/firestore";

// Navbar Component
const Navbar = ({ categories, onSelectCategory, selectedCategory }) => (
  <div className="navbarbordar">
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="#all-items" onClick={() => onSelectCategory("All")}>
            All
          </a>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.name}`}
              onClick={() => onSelectCategory(category.name)}
              className={selectedCategory === category.name ? "active" : ""}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FeatureSection = () => {
  const [loading, setLoading] = useState(true);
  const [featureItems, setFeatureItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const featureSnapshot = await getDocs(collection(db, "portfolio")); // You can rename this collection if needed
        const fetchedFeatures = featureSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const categoriesSnapshot = await getDocs(collection(db, "categories"));
        const fetchedCategories = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (isMounted) {
          setFeatureItems(fetchedFeatures);
          setCategories(fetchedCategories);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching data: ", error);
          setError("Failed to load data. Please try again later.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? featureItems
      : featureItems.filter((item) => item.category === selectedCategory);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <SectionContainer id="featuresection" title="Discover my works">
    
      <div className="portfolio">
        <div className="section1">
          <Navbar
            categories={categories}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
         

          <div className="portfolio-list">
            {filteredItems.map((item) => (
              <FeatureItems
                key={item.id}
                image={item.image}
                title={item.title}
                alt={`Feature item: ${item.title}`}
                link={item.link}
                className="portfolio-item"
              />
            ))}
          </div>
        </div>
      </div>
    
    </SectionContainer>
  );
};

export default FeatureSection;
