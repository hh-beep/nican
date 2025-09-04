//  -- Components --  //
import Resumo from "./Resumo/Resumo";
import Ramos from "./Ramo/Ramos";

//  -- Styles --  //
import "./Sobre.scss";



const Sobre = () => {
    return (
        <section className="Sobre">
            <Resumo />
            <Ramos />
        </section>
    )
}

export default Sobre;