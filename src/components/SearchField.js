import React from "react";

const SearchField = ({ value, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="search-field"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchField;
