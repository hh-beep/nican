//  -- Components --  //
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";

//  -- Styles --  //
import "./ContatoConcluido.scss"



const ContatoConcluido = () => {
  return (
    <main>

      <Navigation />



      <figure id="ContatoConcluido" className="Banner">
        <div className="Banner_Block"></div>
      
        <section className="Banner_Section">
          <h1 className="Banner_Section__Tittle">As suas informações para contato foram salvas!</h1>
        </section>
      </figure>



      <Footer />

    </main>
  )
}

export default ContatoConcluido;
