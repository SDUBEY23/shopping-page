import React from "react";
import "./filter.css";
import CheckboxFilter from "../CheckboxFilters/CheckboxFilter";

const SideFilters = () => {
  return (
    <section className="side-filters">
      <div className="head-containers">
        <span className="header-title">FILTERS</span>
      </div>
      <div className="filter-categories categories-container">
        <span className="vertical-filterHeader">GENDER</span>
        <CheckboxFilter category="male" />
        <CheckboxFilter category="female" />
        <CheckboxFilter category="guys" />
        <CheckboxFilter category="girls" />
      </div>
      <div className="filter-categories categories-container">
        <span className="vertical-filterHeader">CATEGORY</span>
        <CheckboxFilter category="Shirt" />
        <CheckboxFilter category="Tshirt" />
        <CheckboxFilter category="Jeans" />
        <CheckboxFilter category="Jacket" />
      </div>
      <div className="filter-categories categories-container">
        <span className="vertical-filterHeader">Brands</span>
        <CheckboxFilter category="Puma" />
        <CheckboxFilter category="Roadster" />
        <CheckboxFilter category="Mayra" />
        <CheckboxFilter category="LOCOMOTIVE" />
      </div>
    </section>
  );
};

export default SideFilters;
