//  -- Images/Icons --  //
import Icon from "../../../Assets/Logo_Esc_Black.svg"
import Image from "../../../Assets/Ramos_Escoteiros.png";



const Escoteiro = () => {
  return (
    <section id="RamoEscoteiro" className="Ramo">
      <section className="Ramo_Top">
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
        <h2 className="Ramo_Top__Tittle">Ramo Escoteiro - dos 11 aos 15.</h2>
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
      </section>

      <section className="Ramo_Main">
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
            Entre os 11 e 14 anos, fazemos parte do Ramo Escoteiro – somos patrulhas de 5 a 8 jovens, de meninos e meninas, que juntas formam uma tropa. Aqui, além de trabalhar em equipe e entender a importância de respeitar a natureza, aprendemos diversas coisas que nos deixam mais confiantes e decididos.
            Cada patrulha tem seu próprio bastão e bandeirola, onde gravamos lembranças marcantes de nossa experiência juntos, assim como o livro de patrulha, que tem todas as informações sobre os membros e fotografias das nossas ações. Elegemos um monitor, que age como um líder dentro de nosso grupo, e desenvolvemos algumas atividades por conta própria, como ir ao cinema, jogar algum jogo, etc.
            Atividades como acampamentos e excursões fazem parte da nossa vivência no Ramo Escoteiro, sempre com o acompanhamento de adultos. Com nosso lema “Sempre Alerta”, estamos interessados em descobrir coisas novas e estar cercados de amigos.
          </p>
        </section>

        
        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      </section>
    </section>
  )
}

export default Escoteiro;
