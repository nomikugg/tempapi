import React from 'react';
import s from './Search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.radio}>
      <input type="text" placeholder="Buscar Cuidad" className={s.input}></input>
      <button onClick={()=>props.onSearch("Buscando...")} className={s.button}>Buscar </button>
    </div>
  )
};