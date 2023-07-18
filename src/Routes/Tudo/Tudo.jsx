import React from 'react';

/*  React Router Dom */
import {  useLocation  } from "react-router-dom";





const Tudo = () => {

  const {  items  } = useLocation().state;

  console.log(items)



  return (
    <section>
      {items.map(  (item, key) => {
        return (
          <section key={  key  }>
          
            <h1>{item.Titulo}</h1>

          </section>
        )
      })}
    </section>
  )
}

export default Tudo;