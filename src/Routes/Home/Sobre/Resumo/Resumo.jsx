//  -- Link --  //
import {  Link  } from "react-router";
//  -- Style Stuff --  //
import "./Resumo.scss"



const Resumo = () => {
    return (
        <section className="Resumo">
            <h2 className="Resumo_Tittle">Quem somos?</h2>
            <p className="Resumo_Text">
              No Grupo Escoteiro Católico Nican Mopohua – 222/PR, unimos fé, amizade e aventura para transformar vidas. Mais que um grupo, somos uma família que cresce junta, serve à comunidade e vive o escotismo ligado aos ideais catolicos com alegria e propósito.
            
              <Link to="/Sobre" className="Resumo_Link"> Descubra mais sobre nos!</Link>
            </p>
        </section>
    )
}

export default Resumo;
