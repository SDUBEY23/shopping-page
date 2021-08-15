import React, { useState } from "react";
import "./filter.css";

const gender = ["Men", "Women", "Unisex"];

const GenderFilter = (props) => {
  const [checked, setChecked] = useState([]);
  const handleToggle = (item) => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleGenderFilters(newChecked);
  };
  return (
    <section className="side-filters">
      <div className="head-containers">
        <span className="header-title">FILTERS</span>
      </div>
      <div className="filter-categories categories-container">
        <span className="vertical-filterHeader">GENDER</span>
        {gender.map((item, index) => {
          return (
            <ul className="category-list">
              <li key={index}>
                <label className="filter-checkbox" htmlFor={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={() => handleToggle(item)}
                    checked={checked.indexOf(item) === -1 ? false : true}
                    filterType="gender"
                  />
                  {item}
                </label>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default GenderFilter;
