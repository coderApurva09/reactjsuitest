import React from 'react';

const SortingOptions = () => {
  return (
    <div>
      <label>Sort By:</label>
      <select id="sort-options">
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
      </select>
    </div>
  );
};

export default SortingOptions;
