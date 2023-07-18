/*  Basics  */
import React from 'react';

/*  Components  */
import Navbar from "./Navbar/Navbar.jsx";
import Header from "./Header/Header.jsx";
import Sobre from "./Sobre/Sobre.jsx";
import Atividades from "./Atividades/Atividades.jsx";
import Noticias from "./Noticias/Noticias.jsx";

/*  Style  */
import Home_Style from "./Home_Style";
import "./Home_Styles.scss"





const style = Home_Style()





const Home = () => {
  return (
    <section className={  style.container  }>

      <Navbar />
      <Header />
      {/*<Sobre />*/}
      <Atividades />
      <Noticias />
      
    
    </section>
  )
}

export default Home;