import React from 'react';
import s from "./Card.module.css"

export default function Card(props) {
  const { min, max, name, img, onClose} = props
  return (
    <div className={s.card}>
      <button onClick={onClose} className={s.button}> x </button>
      <h4>{name}</h4>
      <div className={s.content}>
        <div className={s.item}>
          <h6>Min</h6>
          <p>{min}</p>
        </div>
        <div className={s.item}>
          <h6>Max</h6>
          <p>{max}</p>
        </div>
        <div className={s.item}>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen Tiempo"/>
        </div>
      </div>
    </div>
  )
};