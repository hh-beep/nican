//  -- Styles --  //
import "./Ramos.scss";

//  -- Modules --  //
import Navigation from "../Navigation/Navigation";
import Banner from "./Banner/Banner";
import Lobinho from "./Lobinho/Lobinho";
import Escoteiro from "./Escoteiro/Escoteiro";
import Senior from "./Senior/Senior";
import Pioneiros from "./Pioneiro/Pioneiros"
import Mais from "./Mais/Mais";
import Chefia from "./Chefia/Chefia";
import Canto from "./Canto/Canto";
import Footer from "../Footer/Footer";





const Ramos = () => {
  return (
    <main>

      <Navigation />

      <Banner />
        
      <Lobinho />
      <Escoteiro />
      <Senior />
      <Pioneiros />

      <Mais />

      <Chefia />
      <Canto />

      <Footer />

    </main>
  );
}

export default Ramos;
