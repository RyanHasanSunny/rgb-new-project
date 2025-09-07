import React, { useState } from "react";
import FeatureItems from "../Container/Items_Container/FeatureItems"; // Renamed from PortfolioItem
import "../../styles/FeatureSection.css"; // Rename this CSS too if needed
import SectionContainer from "../Container/Section_Container/Section_Container"; // Assuming you have a SectionContainer component

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

const FeatureSection = ({ portfolio, categories, onScrollToHero }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

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
