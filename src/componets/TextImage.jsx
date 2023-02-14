import React from 'react'
import birdImage from "../images/bird.png";
import "../styles/text-image.scss";

function TextImage() {
  return (
    <section className="container">
        <div className="text-image">
          <div className="text-image__content-img text-image__content-img--right col-lg-6">
            <img
              className="text-image__primary-img "
              src={birdImage}
              alt=""
            ></img>
          </div>
          <div className="text-image__content-desc">
            <div className="text-image__description-wrapper">
              <span className="text-image__pre-title--green ">
                Tag des Vogels
              </span>
              <h2 className="text-image__title">
                Jetzt mitmachen & mit Gluck gewinnen
              </h2>
              <p className="text-image__desc">
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer 
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
                Gewinnen mit deiner Vogelzeichnung einen 120er Albrecht Durer
              </p>
              <button className="text-image__button button">
                Alle Infos & mitmachen
              </button>
            </div>
            <div className="text-image__second-img-content">
              <img
                className="text-image__second-image"
                src={birdImage}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TextImage