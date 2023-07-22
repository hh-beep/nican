import React from 'react';

/*  Components  */
import MapTextos from "./MapTextos/MapTextos";
import MapLocal from "./MapLocal/MapLocal";

/*  Style  */
import Map_Style from "./Map_Style";
import "./Map_Styles.scss"





const style = Map_Style();





const Map = () => {
  return (
    <section className={  style.container  }>
      <section className={  style.continerSection  }>


        <section className={  style.continerSectionBox  }>
          <MapTextos />
        </section>

        <MapLocal />


      </section>
    </section>
  )
}

export default Map;