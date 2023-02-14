import React from "react";
import "../styles/footer.scss";
import "../styles/general.scss";
import "../grid.scss";
import euroImg from "../images/Zahlarten_Icon.webp";
import versandImg from "../images/versand.webp";
import reshipmentImg from "../images/reshipment.webp";
import secureImg from "../images/Secure_Icon.webp";
import faberLogo from "../images/faber-castell.png";


const description = [
  {
    image: euroImg,
    desc:"PayPal, Rechnung, Vorauskasse, Sofortuberweisung, Mastercard oder Visa"
  },
  {
    image:versandImg,
    desc:"Versandkostenfrei"
  },
  {
    image:reshipmentImg,
    desc:"Kostenloser Ruckversand"
  }
  ,{
    image:secureImg,
    desc:"SSL Verschlusselung zum Schutz Ihrer Daten"
  }
];
const column = [
  {
    title: "Produkte",
    item: [
      "kreidendfff",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
    ],
  },
  {
    title: "Inspiration & Tutorial",
    item: ["kreiden", "kreiden", "kreiden", "kreiden", "kreiden", "kreiden"],
  },
  {
    title: "Unternehmen",
    item: [
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
    ],
  },
  {
    title: "Service service service",
    item: [
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
      "kreiden",
    ],
  },
];

function Footer() {
  const show = (e, key) => {
    let target = e.target; 
    target.closest(".page-footer__directory-column").classList.toggle("page-footer__directory-column--open");
  };
  return (
    <footer className="page-footer container">
      <div className="page-footer__buystrip-wrapper row">
        {description.map((e, key) => {
          return (
            <div key={key} className="page-footer__buystrip-item col-lg-3">
              <img src={e.image} alt="" className="__buystrip-logo"/>
              <h4 className="page-footer__buystrip-desc">
                {e.desc}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="page-footer__directory-content row">
        <div className="page-footer__logo-image-wrapper  center-xs">
          <img src={faberLogo} alt="" className="page-footer__logo-img" />
        </div>
        <div className="page-footer__directory ">
          {column.map((e, key) => {
            return (
              <div key={key} className="page-footer__directory-column col-lg-3" onClick={(e) => show(e, key)}>
                <p
                  className="page-footer__column-title"
                  
                >
                  {e.title}
                </p>
                <svg className="page-footer__arrow"
                  width="10"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99992 10.6667L1.33325 6.00001L5.99992 1.33334"
                    stroke="white"
                    strokeOpacity="1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <ul className="page-footer__column-item-wrapper">
                  {e.item.map((el, k) => {
                    return (
                      <li key={k} className="page-footer__column-item">
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="page-footer__global-footer">
          <div className="page-footer__copyright-content col-lg-6">
            <p className="page-footer__copyright">Copyright 2022</p>
            <p className="page-footer__copyright">Impressium</p>
          </div>
          <p className="page-footer__lang-translate col-lg-6">
            Change language
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
