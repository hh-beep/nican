//  -- Modulos
import Navigation from "../Navigation";
import Start from "./Start/Start";
import Sobre from "./Sobre/Sobre";
import Footer from "./Footer/Footer";



const Home = () => {
    return (
        <main>
            {/*  The NavBar Module import goes here :D */}
            <Navigation />

            <Start />
            <Sobre /> 
            <Footer />
        </main>
    )
}

export default Home;