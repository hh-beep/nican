//  -- Components --  //
import Navigation from "../Navigation/Navigation.jsx"
import Banner from "./Banner/Banner.jsx";
import Inicio from "./Inicio/Inicio.jsx"
import Historia from "./Historia/Historia.jsx";
import Grupo from "./Grupo/Grupo.jsx";
import Catolico from "./Catolico/Catolico.jsx";
import Footer from "../Footer/Footer.jsx";



const Sobre = () => {
  return (
    <main>
 
      <Navigation />

      <Banner />
      <Inicio />
      <Historia />
      <Grupo />
      <Catolico />   

      <Footer />

    </main>
  )
}

export default Sobre;
