import React from 'react';

/*  Style  */
import MapLocal_Style from "./MapLocal_Style";





const style = MapLocal_Style();





const MapLocal = () => {

  const source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.0034850666324!2d-54.57001473732569!3d-25.49929671508946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69a81ec24f0d7%3A0xe49209c0ab8b493!2sGrupo%20Escoteiro%20Cat%C3%B3lico%20Nican%20Mopohua%20-%20222%2FPR!5e0!3m2!1sen!2sbr!4v1689937747729!5m2!1sen!2sbr"


  return (
    <section className={  style.container  }>
      <iframe 
        src={  source  } 
        title="Iframe"
        loading="lazy"
        allowFullScreen=""
        className={  style.containerMap  }
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </section>
  )
}

export default MapLocal;