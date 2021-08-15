import React, { useState } from "react";
import "./filter.css";

const category = [
  "Daniel Klein",
  "Roadster",
  "Puma",
  "Vishudh",
  "Mactree",
  "HERE&NOW",
  "United Colors of Benetton",
];

const BrandFilter = (props) => {
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
    props.handleBrandFilters(newChecked);
  };
  return (
    <section className="brand-filters">
      {/* <div className="head-containers">
        <span className="header-title">FILTERS</span>
      </div> */}
      <div className="filter-categories categories-container">
        <span className="vertical-filterHeader">Brands</span>
        {category.map((item, index) => {
          return (
            <ul className="category-list">
              <li key={index}>
                <label className="filter-checkbox" htmlFor={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={() => handleToggle(item)}
                    checked={checked.indexOf(item) === -1 ? false : true}
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

export default BrandFilter;
