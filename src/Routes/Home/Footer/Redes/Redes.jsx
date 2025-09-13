//  -- Images --  //
import insta from "../../../../Assets/instagram.svg";
import faceb from "../../../../Assets/facebook.svg";

import "../FooterItem.scss";



const Redes = () => {
  
  const redesSociais = [
    {  name: "Instagram", img: insta  },
    {  name: "Facebook ", img: faceb  },
  ]


  return (
    <section className="FooterItem">
      <h2 className="FooterItem_Titulo">Redes sociais:</h2>
      

      <ul className="FooterItem_Lista">
        {
          redesSociais.map(  rede => {
            return (
              <section className="FooterItem_Lista__Item">
                <img className="FooterItem_Lista__Item-Imagem" src={  rede.img  }/>
                <p className="FooterItem_Lista__Item-Texto">{  rede.name  }</p>
              </section>
            )  
          })
        }
      </ul>
    </section>
  )
}

export default Redes;
