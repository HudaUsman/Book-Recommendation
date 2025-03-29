import React from 'react';

const CategoryDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'Fiction',
    'Science',
    'Romance',
    'History',
    'Biography',
    'Fantasy',
    'Technology',
    'Travel',
    'Comics',
  ];

  return (
    <div className="dropdown">
      <label>Select Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">-- Choose a category --</option>
        {categories.map((category, idx) => (
          <option value={category} key={idx}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
