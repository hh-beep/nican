//  -- Link --  //
import {  Link  } from "react-router";

import "../FooterItem.scss"



const Sobre = () => {
  
  const paths = [
    {  name: "Entrar em Contato", path: "/"  },
    {  name: "Noticias do Grupo", path: "/" },
    {  name: "Ver nossos Ramos", path: "/"  }
  ]


  return (
    <section className="FooterItem">
      <h3 className="FooterItem_Titulo">Sobre o Grupo</h3>
      

      <section className="FooterItem_Lista">
        {
          paths.map(  path => {
            return (
              <Link to={  path.path  } className="FooterItem_Lista__Item">
                <p className="FooterItem_Lista__Item-Texto FooterLinkTexto">{  path.name  }</p>
              </Link>
            )
          })
        }
      </section>
    </section>
  )
}

export default Sobre;
