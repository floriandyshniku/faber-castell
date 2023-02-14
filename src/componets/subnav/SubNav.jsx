import React, { useState } from "react";
import "./subnav.scss";
import data from "../data/data";
import NestedNav from "./NestedNav.jsx";
import { useContext } from "react";
import { NestedContext } from "../contexts/NestedContext";
import logo from "../../images/faber.png";
function SubNav(props) {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const {
    activeNestedNav,
    setActiveNestedNav,
    closeNav
  } = useContext(NestedContext);

  const enable = (property, clikedIndex) => {
    setSelectedProperty(property)
    setActiveNestedNav(true);
    setActiveIndex(clikedIndex)
  };

  const disable = () => {
    setActiveNestedNav(false);
  };

  return (
    <><div id={props.index} className={props.change && props.selectedCategory?.id + 1 === props.index ? "sub-navigation sub-navigation--open" : "sub-navigation"}>
      
      <button className="sub-navigation__button mobile-hide close-btn" onClick={closeNav}></button>
      <img
        src={logo}
        alt=""
        srcSet=""
        className="sub-navigation__logo mobile-hide" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sub-navigation__arrow"
        onClick={props.turnBack}
      >
        <path
          d="M3.3335 8H12.6668"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
        <path
          d="M8.6665 4L12.6665 8L8.6665 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
      </svg>

      <h2 className="sub-navigation__title">{data[props.index - 1].name !== null ? data[props.index - 1].name : ""}</h2>
      <ul className="sub-navigation__list-item">
        {data[props.index - 1]?.properties.map((property, key) => {
          return (
            <li key={key} className="sub-navigation__sub-item">
              <p className={activeIndex === property.id ? "sub-navigation__underline  sub-navigation__underline--active ":"sub-navigation__underline"} onClick={() => { enable(property, key) } }>{property.name}
              {property.properties?.length !== 0 &&<svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={ activeNestedNav ? "sub-navigation__right-arrow sub-navigation__right-arrow--active" : "sub-navigation__right-arrow" }
              >
              <path
              d="M3.3335 8H12.6668"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round" />
              <path
              d="M8.6665 4L12.6665 8L8.6665 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round" />
              </svg>}</p>
              {<NestedNav active={activeNestedNav} selectedProperty={selectedProperty} property={property} disable={disable} category={props.category}/>}
            </li>
          );
        })}
      </ul>
    </div></>
  );
}

export default SubNav;
