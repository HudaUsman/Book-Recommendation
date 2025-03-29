import React from "react";

const CategoryDropdown = ({ setCategory }) => {
  const categories = ["fiction", "science", "romance", "history", "biography"];

  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
