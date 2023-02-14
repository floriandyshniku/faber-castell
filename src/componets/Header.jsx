import logo from "../images/faber-castell.png";
import logoFaber from "../images/faber.png";
import "../styles/header.scss";
import flag from "../images/flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import clear from "../images/clear-icon.png";
import Banner from "./banner/Banner";
import Navigation from "./navigation/Navigation";
import { useEffect, useRef, useState } from "react";
import { NestedContext } from "./contexts/NestedContext.js";

const Header = () => {
  const [activeNestedNav, setActiveNestedNav] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [active, setActive] = useState(false);
  const [activeBanner, setActiveBanner] = useState(false);
  const [change, setChange] = useState(true);
  const body = document.getElementsByTagName("body")[0];
  const openBanner = () => {
    setActiveBanner(true);
    body.classList.add("visible");
  };
  const closeBanner = () => {
    body.classList.remove("visible");
    setActiveBanner(false);
  };
  const handleClick = () => {
    if (active === false) {
      document.getElementsByTagName("body")[0].classList.add("focus");
      setActiveNestedNav(false);
    } else {
      document.getElementsByTagName("body")[0].classList.remove("focus");
      setActiveNestedNav(false);
    }
    setActive(!active);
  };
  const closeNav = () => {
    setActive(false);
    setChange(false);
    setActiveNestedNav(false);
    document.getElementsByTagName("body")[0].classList.remove("focus");
  };
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      const target = e.target;
      const children = Array.from(menuRef.current.children);
      const outsideClick =
        navRef.current &&
        e.target !== navRef.current &&
        !children.includes(e.target);
      if (outsideClick && target.closest(".navigation") !== navRef.current) {
        setActive(false);
        setChange(false);
        setActiveNestedNav(false);
        document.getElementsByTagName("body")[0].classList.remove("focus");
      }
    });
    return () => {
      document.removeEventListener("mousedown", (e) => {});
    };
  }, []);

  return (
    <header className="header">
      <Banner
        image={logoFaber}
        setActiveBanner={setActiveBanner}
        activeBanner={activeBanner}
        closeBanner={closeBanner}
        openBanner={openBanner}
      />
      <div className="header__nav-container row">
        <nav className="header__nav-bar row bottom-xs col-lg-4">
          <ul className="header__nav-list">
            <li className="header__list-links">
              <div className="header__menu">
                <div className="header__menu-wrapper">
                  <div
                    className={
                      active
                        ? "header__burger-menu header__burger-menu--active"
                        : "header__burger-menu"
                    }
                    onClick={handleClick}
                    ref={menuRef}
                  >
                    <span className="header__bar header__bar-first"></span>
                    <span className="header__bar header__bar--short"></span>
                    <span className="header__bar header__bar-third"></span>
                  </div>
                  <p className="header__text-menu hidden" onClick={handleClick}>
                    menu
                  </p>
                </div>
                <NestedContext.Provider
                  value={{
                    activeNestedNav,
                    setActiveNestedNav,
                    closeNav
                  }}
                >
                  <Navigation
                    clear={clear}
                    logo={logoFaber}
                    active={active}
                    closeNav={closeNav}
                    navRef={navRef}
                    change={change}
                    setChange={setChange}
                  />
                </NestedContext.Provider>
              </div>
            </li>
            <li className="header__list-links hidden">produkete</li>
            <li className="header__list-links hidden">nachhaltigkeit</li>
            <li className="header__list-links hidden">inspiration</li>
          </ul>
        </nav>
        <div className="header__image-wrapper col-lg-4">
          <div className="header__logo-image ">
            <img src={logo} alt="" className="header__img--desktop" />
            <img src={logoFaber} alt="" className="header__img--mobile" />
          </div>
        </div>
        <div className="header__nav-search row end-xs col-lg-4">
          <div className="header__meta-links hidden">
            <a href="/" className="header__meta-link-txt">
              handlersuche
            </a>
            <a href="/" className="header__meta-link-txt">
              newsletter
            </a>
            <a href="/" className="header__meta-link-txt">
              hilfe & support
            </a>
            <a href="/" className="header__lang">
              <img src={flag} alt="" className="header__flag-lang" />
            </a>
          </div>
          <div className="header__search-wrapper">
            <input
              type="text"
              className="header__search-input hidden"
              placeholder="suche"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="header__search-icon"
            />
          </div>
          <div className="header__user-login hidden">
            <svg
              className="header__login-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 32 32"
            >
              <path d="M16 2.909c7.23 0 13.091 5.861 13.091 13.091s-5.861 13.091-13.091 13.091c-7.23 0-13.091-5.861-13.091-13.091s5.861-13.091 13.091-13.091zM18.181 21.818h-3.631c-1.576 0-3.036 0.704-4.013 1.933-0.468 0.589-0.79 1.252-0.954 1.958 1.841 1.218 4.046 1.927 6.417 1.927 2.639 0 5.073-0.879 7.025-2.359-0.355-1.074-1.075-2.004-2.058-2.639-0.767-0.495-1.647-0.775-2.558-0.815l-0.228-0.005zM16 4.364c-6.427 0-11.636 5.21-11.636 11.636 0 3.495 1.54 6.629 3.979 8.762 0.235-0.686 0.59-1.332 1.055-1.917 1.207-1.518 2.994-2.414 4.928-2.478l0.224-0.004h3.631c1.271 0 2.509 0.364 3.575 1.053 1.090 0.703 1.932 1.694 2.437 2.846 2.126-2.108 3.443-5.032 3.443-8.263 0-6.427-5.21-11.636-11.636-11.636zM16 7.273c3.209 0 5.818 2.609 5.818 5.818s-2.609 5.818-5.818 5.818c-3.208 0-5.818-2.61-5.818-5.818 0-3.209 2.609-5.818 5.818-5.818zM16 8.727c-2.406 0-4.364 1.958-4.364 4.364s1.959 4.364 4.364 4.364c2.406 0 4.364-1.958 4.364-4.364s-1.958-4.364-4.364-4.364z"></path>
            </svg>
          </div>
          <div className="header__shoping">
            <svg
              className="header__shop-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 32 32"
            >
              <path d="M16 2.182c3.213 0 5.818 2.605 5.818 5.818v1.455h2.909l2.182 19.636h-21.818l2.182-19.636h2.909v-1.455c0-3.213 2.605-5.818 5.818-5.818zM23.425 10.909h-14.852l-1.858 16.727h18.568l-1.858-16.727zM16 3.636c-2.355 0-4.275 1.866-4.361 4.2l-0.003 0.164v1.455h8.727v-1.455c0-2.41-1.953-4.364-4.364-4.364z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
