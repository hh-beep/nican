//  -- Images --  //
import insta from "../../../../Assets/instagram.svg";
import faceb from "../../../../Assets/facebook.svg";

//  -- Link --  //
import {  Link  } from "react-router";

import "../FooterItem.scss";



const Redes = () => {
  
  const redesSociais = [
    {  name: "Instagram", img: insta, url: "https://www.instagram.com/gecnican222pr/"  },
    {  name: "Facebook ", img: faceb, url: "https://www.facebook.com/GECNican"  },
  ]


  return (
    <section className="FooterItem">
      <h2 className="FooterItem_Titulo">Redes sociais:</h2>
      

      <ul className="FooterItem_Lista">
        {
          redesSociais.map(  rede => {
            return (
              <a target="_blank" className="FooterItem_Lista__Item" href={  rede.url  }>
                <img className="FooterItem_Lista__Item-Imagem" src={  rede.img  }/>
                <p className="FooterItem_Lista__Item-Texto">{  rede.name  }</p>
              </a>
            )  
          })
        }
      </ul>
    </section>
  )
}

export default Redes;
