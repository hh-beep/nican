//  -- Icons --  //
import {  GiFleurDeLys as LysIcon  } from 'react-icons/gi';

//  -- Styles --  //
import "./Inicio.scss"



const Inicio = () => {
  return (
    <section className="Inicio">
      <section className="Inicio_Area">
        <LysIcon color="#2c2c2c" className="Inicio_Area__Icon"/>
        <h2 className="Inicio_Area__Tittle">Nossa Historia</h2>
        <LysIcon color="#2c2c2c" className="Inicio_Area__Icon"/>
      </section>

      <p className='Inicio_Text'>
        O Grupo Escoteiro Católico Nican Mopohua – 222/PR surgiu em 2017 com o propósito de oferecer à juventude um movimento educacional sem fins lucrativos que promove o desenvolvimento integral de crianças, adolescentes e jovens — unindo o método escoteiro aos valores cristãos da fé católica.
        Mais do que um grupo, somos uma família escoteira que acredita que a educação pelo exemplo, a espiritualidade e o serviço podem transformar vidas e comunidades inteiras. Desde então, o grupo tem marcado presença ativa na cidade, participando de eventos regionais, ações sociais e encontros escoteiros que fortalecem o espírito de fraternidade e o compromisso com o serviço.
        Com o passar dos anos, nosso grupo cresceu e se consolidou como referência entre os grupos escoteiros católicos do Paraná, sendo reconhecido por sua dedicação, organização e pela formação espiritual de seus membros.
      </p>
    </section>
  )
}

export default Inicio;
