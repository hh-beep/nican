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
            O Ramo Lobinho é formado por crianças de 6 e meio a 10 anos que aprendem a viver em grupo e a cuidar da natureza. Inspirados pelo “Livro da Jângal”, que conta as aventuras de Mowgli, formamos a alcateia, dividida em pequenas matilhas com quatro a seis lobinhos. Juntos, brincamos, exploramos, fazemos amigos e descobrimos o valor da boa ação diária. 
            A cada atividade, buscamos crescer e aprender, vivendo o nosso lema com alegria: fazer sempre o Melhor Possível.
          </p>
        </section>
      </section>
    </section>
  )
}

export default Lobinho;
