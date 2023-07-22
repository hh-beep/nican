import React from 'react';

/*  Data  */
import Rodape_Data from "./Rodape_Data";

/*  Components  */
import RodapeTitulo from "./RodapeTitulo/RodapeTitulo";
import RodapeItem from "./RodapeItem/RodapeItem"; 

/*  Style  */
import Rodape_Style from "./Rodape_Style";
import "./Rodape_Styles.scss"





const style = Rodape_Style();





const Rodape = () => {

  const data = Rodape_Data();


  return (
    <section className={  style.container  }>
      <section className={  style.containerSection  }>


        <RodapeTitulo />

        <section className={  style.containerSectionList  }>
          {data.map(  (item, key) => {
            return (
              <RodapeItem 
                key={  key  }
                item={  item  }
              />
            )
          })}
        </section>


      </section>
    </section>
  )
}

export default Rodape;