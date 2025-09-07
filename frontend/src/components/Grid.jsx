import React from "react";
import Square from "./Container/Shape";

const layout = [
  [1],
  [1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1],
  [1, 0, 0],
];

const Grid = () => {
  return (
    <div style={styles.gridContainer}>
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) =>
            cell ? (
              <Square
                key={colIndex}
                image={`https://via.placeholder.com/80?text=${rowIndex * 3 + colIndex + 1}`}
              />
            ) : (
              <div key={colIndex} style={styles.placeholder}></div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap", // Enables wrapping on small screens
  },
  row: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
  },
  placeholder: {
    width: "80px",
    height: "80px",
    visibility: "hidden",
  },
};

export default Grid;
