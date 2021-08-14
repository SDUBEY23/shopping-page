import React from "react";
import "./checkboxFilter.css";

const CheckboxFilter = ({ category }) => {
  return (
    <div>
      <div>
        <ul className="category-list">
          <li>
            <label className="filter-checkbox" htmlFor={category}>
              <input type="checkbox" value={category} />
              {category}
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckboxFilter;
