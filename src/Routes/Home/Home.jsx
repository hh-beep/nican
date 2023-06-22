/*  Basics  */
import React from 'react';

/*  Components  */
import Header from "./Header/Header.jsx";
import Sobre from "./Sobre/Sobre.jsx";

/*  Style  */
import Home_Style from "./Home_Style";





const style = Home_Style()





const Home = () => {
  return (
    <section className={  style.container  }>

      <Header />
      <Sobre />
    
    </section>
  )
}

export default Home;