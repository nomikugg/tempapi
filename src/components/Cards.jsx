import React from 'react';
import Card from './Card';
import s from "./Cards.module.css";

export default function Cards(props) {

  return (
  <div className={s.cards}>
      {props.cities.map((a, index)=>(
        <Card
            max={a.main.temp_max}
            min={a.main.temp_min}
            name={a.name}
            img={a.weather[0].icon}
            onClose={() => alert(a.name)}
            key={index}
        />
      ))}
  </div>
  )
};