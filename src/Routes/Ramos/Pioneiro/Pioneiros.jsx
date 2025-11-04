//  -- Images/Icons --  //
import Icon from "../../../Assets/Logo_Pio.svg"
import Image from "../../../Assets/Ramos_Pioneiros.png";



const Pioneiros = () => {
  return (
    <section id="RamoPioneiros" className="Ramo white">
      <section className="Ramo_Top">
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
        <h2 className="Ramo_Top__Tittle">Ramo Pioneiro - dos 18 aos 22.</h2>
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
      </section>

      <section className="Ramo_Main">
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
            A partir dos 18 anos, e até os 21 incompletos, integramos o Ramo Pioneiro. Nossa equipe forma o clã, e é onde nos apoiamos e descobrimos interesses em comum. Levamos a sério nosso lema “Servir”, já que vivemos uma aventura que não é mais simbólica ou imaginária, pois experimentamos o papel real do adulto por meio do serviço e das atividades de desenvolvimento comunitário.
            O cotidiano no clã nos dá bastante liberdade, mas já estamos cientes da responsabilidade que isso traz – somos nós que organizamos nossas próprias atividades. Esse é o período em que entramos na vida adulta, e estamos concluindo a formação de nossos valores e princípios.
            Mesmo estando no clã, já podemos participar como adultos voluntários em outros Ramos atuar ativamente em nossas comunidades. Prestes a completar 21 anos, é chegada a hora de encerrar nossa caminhada como jovem no Movimento Escoteiro. A Cerimônia de Partida marca essa etapa, que pode ser seguida pela vida escoteira no papel de voluntário, como escotista ou dirigente.
          </p>
        </section>

        
        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      </section>
    </section>
  )
}

export default Pioneiros;
