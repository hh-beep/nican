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
            O Ramo Pioneiro é formado por jovens de 18 a 22 anos que fazem parte do clã, um grupo unido pelo lema “Servir”. Aqui vivemos com mais liberdade e também com mais responsabilidade, criando e realizando nossas próprias atividades e ações que ajudam a comunidade. É o momento de reforçar nossos valores, aprender com as experiências e entender melhor nosso papel no mundo. 
            A caminhada termina com a Cerimônia de Partida, quando seguimos servindo com o mesmo entusiasmo, agora como voluntários ou escotistas.
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
