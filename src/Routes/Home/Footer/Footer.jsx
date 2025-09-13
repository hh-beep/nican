//  -- Componentes --  //
import Redes from "./Redes/Redes";
import Sobre from "./Sobre/Sobre";
import Sistema from "./Sistema/Sistema";


import "./Footer.scss";



const Footer = () => {
  return (
        <section className="Footer">
        

          {/*  Redes Sociais  */}     
          <Redes />

          {/*  Sobre o grupo  */}
          <Sobre />

          {/*  Sistem  */}
          <Sistema /> 

        </section>
  )
}

export default Footer;
