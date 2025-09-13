//  -- Link --  //
import {  Link  } from "react-router";

import "../FooterItem.scss";



const Sistema = () => {

  const paths = [
    {  name: "Fazer Login", path: "/"  },
    {  name: "Requerimentos", path: "/" },
    {  name: "Fazer um Pedido", path: "/"  }
  ]


  return (
    <section className="FooterItem">
      <h3 className="FooterItem_Titulo">Sistema do Site</h3>


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

export default Sistema;
