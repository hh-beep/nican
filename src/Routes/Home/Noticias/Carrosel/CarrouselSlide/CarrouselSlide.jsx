import { Link } from "react-router";

import "./CarrouselSlide.scss";




const CarrouselSlide = ({  slideInfos  }) => {

    const {  
        imagem, textoImagem, texto, 
        titulo, data, corHex, autor
    } = slideInfos;


    return (
        <Link to="/" className="CarrouselSlide">
            <figure style={{  backgroundColor: corHex  }} className="CarrouselSlide_Figure">
                <img className="CarrouselSlide_Figure__Imagem" src={  imagem  }/>
                <h3 className="CarrouselSlide_Figure__Texto">{  textoImagem  }</h3>
            </figure>

            <section className="CarrouselSlide_Section">
                <p className="CarrouselSlide_Section__Data">{  data  }</p>
                <h3 className="CarrouselSlide_Section__Titulo">{  titulo  }</h3>
            </section>
        </Link>
    )
}

export default CarrouselSlide;