/*  Basics  */
import React from 'react';

/*  Components  */
import Map from "./Map/Map.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Header from "./Header/Header.jsx";
import Avisos from "./Avisos/Avisos.jsx";
import Rodape from "./Rodape/Rodape.jsx";
import Atividades from "./Atividades/Atividades.jsx";

/*  Style  */
import Home_Style from "./Home_Style";
import "./Home_Styles.scss"





const style = Home_Style()





const Home = () => {
  return (
    <section className={  style.container  }>

      <Navbar />
      <Header />
      <Atividades />
      <Avisos />
      <Map />
      <Rodape />
      
    
    </section>
  )
}

export default Home;