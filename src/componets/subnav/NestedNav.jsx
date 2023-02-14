import React, { useContext } from 'react'
import "./nested-nav.scss"

function NestedNav(props) {
  return (
      <>
      <ul className={props.active ? "nested-nav nested-nav--active" : "nested-nav"}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="nested-nav__arrow hide-desktop" onClick={(e) => props.disable(e)}>
        <path d="M3.3335 8H12.6668" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.6665 4L12.6665 8L8.6665 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="desktop-hide"></div>
      <li className='nested-nav__item'>
        <h2 className='nested-nav__tittle'>{props.active === true && props.selectedProperty?.name !== undefined ? props.selectedProperty?.name : props.category.properties[0].name}</h2>
        {(props.selectedProperty !== null &&
          props.selectedProperty.properties.map((elem, key) => {
            return <p key={key} className='nested-nav__item-text'>{elem}</p>
          })
        ) || (props.category.properties[0].properties.map((elem, key) => {
          return <p key={key} className='nested-nav__item-text'>{elem}</p>
        }))}
      </li>
    </ul> </>
  )
}

export default NestedNav