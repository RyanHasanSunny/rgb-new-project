import React from "react";

const Square = ({ image }) => {
  return (
    <div style={styles.square}>
      {image && <img src={image} alt="loading" style={styles.image} />}
    </div>
  );
};

const styles = {
  square: {
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(65, 68, 66, 0.8)", // semi-transparent green
    border: "2px solid #333",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Square;
