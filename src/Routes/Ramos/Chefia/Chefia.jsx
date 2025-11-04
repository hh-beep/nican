//  -- Images/Icons --  //
import {  LiaHatCowboySideSolid as Icon  } from 'react-icons/lia'
import Image from "../../../Assets/Ramos_Voluntarios.png";



const Chefia = () => {
  return (
    <section id="RamoChefia" className="Ramo white">
      <section className="Ramo_Top">
        <Icon color="#f2f2f2" className="Ramo_Top__Icon"/> 
        <h2 className="Ramo_Top__Tittle">Chefes e Voluntarios - A partir dos 22</h2>
        <Icon color="#f2f2f2" className="Ramo_Top__Icon"/> 
      </section>

      <section className="Ramo_Main">
        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
            O Grupo Escoteiro Católico Nican Mopohua – 222/PR é conduzido por uma equipe de voluntários comprometidos com a educação, a fé e o serviço.
            Nossa diretoria é formada por adultos escotistas e pais que dedicam seu tempo e talento para garantir que o grupo funcione com responsabilidade, segurança e alegria.
            A diretoria é responsável por toda a gestão administrativa, pedagógica e espiritual do grupo, apoiando os ramos (Lobinhos, Escoteiros, Seniores e Pioneiros) e promovendo formações, eventos e atividades comunitárias.
            Mais do que coordenadores, são pessoas que acreditam no poder do escotismo como ferramenta de transformação e que trabalham em unidade para manter viva a missão do Nican Mopohua.
          </p>
        </section>
      </section>
    </section>
  )
}

export default Chefia;
