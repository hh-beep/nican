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
            O nosso grupo é guiado por Chefes voluntários que acreditam na força da educação, da fé e do serviço. Nossa diretoria é formada por escotistas e pais dedicados, que oferecem seu tempo e talento para garantir um grupo seguro, alegre e bem organizado. Eles cuidam da parte administrativa, financeira e estrutural do grupo, apoiando todos os ramos e promovendo formações, eventos e ações comunitárias.
            Mais do que diretores, são pessoas que vivem o escotismo com amor e mantêm viva a missão do Nican Mopohua.
          </p>
        </section>
      </section>
    </section>
  )
}

export default Chefia;
