//  -- Images/Icons --  //
import Icon from "../../../Assets/Logo_Lob_Black.svg"
import Image from "../../../Assets/Ramos_Lobinhos.png";



const Lobinho = () => {
  return (
    <section id="RamoLobinho" className="Ramo">
      <section className="Ramo_Top">
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
        <h2 className="Ramo_Top__Tittle">Ramo Lobinho - dos 06 aos 10.</h2>
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
      </section>

      <section className="Ramo_Main">
        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
            Entre os 6,5 e os 10 anos, somos lobinhos. Aprendemos muito sobre a vida em meio à natureza, a viver em grupo e desenvolvemos nossa liderança. “O livro da Jângal”, que retrata as aventuras de Mowgli, o menino lobo, é o que inspira a organização do Ramo Lobinho – juntos, formamos uma alcateia, que é dividida em pequenos grupos chamados matilhas.
            Cada matilha tem de quatro a seis lobinhos, entre meninos e meninas, e esse grupo nos acompanha durante todo o período em que ficamos nesse Ramo.
            Com esses amigos, fazemos jogos, brincadeiras, vivemos aventuras, aprendemos sobre a importância da boa ação diária e ainda somos incentivados a fazer sempre o nosso Melhor Possível; esse inclusive é o nosso lema.
          </p>
        </section>
      </section>
    </section>
  )
}

export default Lobinho;
