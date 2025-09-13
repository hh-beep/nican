//  -- Imports for Carrousel --  //
import Slider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

//  -- Styles --  //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrosel.scss";

//  -- Components --  //

import { 
    useState, 
    useEffect 
} from "react";
import CarrouselSlide from "./CarrouselSlide/CarrouselSlide";




const Carrosel = ({  noticiasInfos  }) => {


    const slides = Object.values(  noticiasInfos  ).slice(-4);

    console.log(slides, noticiasInfos)


    return (
        <Slider
            slidesToShow={2}
            speed={500}
            dots={true}
            infinite={true}
            slidesToScroll={1}
            nextArrow={  <FiArrowRight />  }
            prevArrow={  <FiArrowLeft  />  }
            className="Carrosel"
        >
            {
                slides.map(  (slideInfos, key) => {
                    return (
                        <section className="Carrosel_Slide" key={key}>
                            <CarrouselSlide slideInfos={  slideInfos  }/>
                        </section>
                    )
                })
            }
        </Slider>
    )
}

export default Carrosel;