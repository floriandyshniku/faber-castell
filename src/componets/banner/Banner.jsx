import React, { useRef, useState } from 'react'
import "./banner.scss"
function Banner(props) {
 
  return (
    <div className="promotion__banner  center-xs">
    <span className="promotion__banner-text col-xs-6" onClick={() => props.openBanner()}>
      Gratis Ruckversand & Umtausch
    </span>
    <div className={props.activeBanner ? "promotion__banner-container overlay promotion__banner-container--display" : "promotion__banner-container"}>
      <div className="promotion__banner-logo">
        <img src={props.image} alt="" className="promotion__logo-img"/>
      </div>
      <button className='promotion__banner-button close-btn' onClick={() => props.closeBanner()}></button>
      <div className="promotion__columns-wrapper container row">
        <div className="promotion__banner-column col-lg-4">
          <h4 className="promotion__col-title">Summer Sale</h4>
          <p className="promotion__banner-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis est consequuntur doloremque quaerat ea.
          </p>
          <p className="promotion__banner-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis est consequuntur doloremque quaerat ea.
          </p>
          <div className="promotion__links-wrapper">
            <a href="/" className="promotion__col-links">
              Einloggen
            </a>
            <a href="/" className="promotion__col-links">
              Einloggen
            </a>
          </div>
        </div>
        <div className="promotion__banner-column col-lg-4">
          <h4 className="promotion__col-title">Summer Sale</h4>
          <p className="promotion__banner-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis est consequuntur doloremque quaerat ea.
          </p>
          <p className="promotion__banner-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis est consequuntur doloremque quaerat ea.
          </p>
          <div className="promotion__links-wrapper">
            <a href="/" className="promotion__col-links">
              Einloggen
            </a>
            <a href="/" className="promotion__col-links">
              Einloggen
            </a>
          </div>
        </div>
        <div className="promotion__banner-column col-lg-4">
          <h4 className="promotion__col-title">Summer Sale</h4>
          <p className="promotion__banner-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis est consequuntur doloremque quaerat ea.
          </p>
          <p className="promotion__banner-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis est consequuntur doloremque quaerat ea.
          </p>
          <div className="promotion__links-wrapper">
            <a href="/" className="promotion__col-links">
              Einloggen
            </a>
            <a href="/" className="promotion__col-links">
              Einloggen
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner;