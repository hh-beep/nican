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

    const carrouselSettings = {
      slidesToShow: 2,
      speed: 500,
      dots: true,
      infinite: true,
      initialSlide: 0,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
          },
          {                                   // Uhhh pelo visto n funciona sem isso :D
            breakpoint: 8192,  
            settings: {  slidesToShow: 2  }
          }
      ] 
    }



    return (
        <Slider
          className="Carrosel"
          nextArrow={  <FiArrowRight />  }
          prevArrow={  <FiArrowLeft  />  }
          {...carrouselSettings}
        >
            {
                slides.map(  (slideInfos, key) => {
                    return (
                        <section className="Carrosel_Slide" key={key}>
                            <CarrouselSlide key={  key  } slideInfos={  slideInfos  }/>
                        </section>
                    )
                })
            }
        </Slider>
    )
}

export default Carrosel;
