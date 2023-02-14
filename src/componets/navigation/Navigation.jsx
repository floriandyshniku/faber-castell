import React from "react";
import "./navigation.scss";
import data from "../data/data.js";
import SubNav from "../subnav/SubNav";
import { useState } from "react";

function Navigation(props) {
  let index = 0
  const [selectedCategory, setSelectedCategory] = useState(null);
  const changeText = (category, id) => {
    props.setChange(true);
    setSelectedCategory(category)
  };

  const turnBack = () => {
    props.setChange(false)
  }

  return (
    <><div className={props.active ? "navigation navigation--active" : "navigation"} ref={props.navRef}>
      <div className="navigation__sticky-item mobile-hide">
        <div className="navigation__img-logo hidden">
          <img
            src={props.clear}
            alt="/"
            className="navigation__close-img hidden"
            onClick={() => props.closeNav()} />
          <img src={props.logo} alt="" className="navigation__logo" />
        </div>
      </div>
      <ul className="navigation__list">

        {data?.map((category, key) => {
          index++;
          return (
            <li key={key} className="navigation__list-item">
              <h2 className="navigation__item-el" onClick={() => { changeText(category, key); } }>{category.name}</h2>
              {<SubNav index={index} change={props.change} turnBack={turnBack} selectedCategory={selectedCategory} category={category} />}
            </li>
          );
        })}
      </ul>
    </div></>
  );
}

export default Navigation;
