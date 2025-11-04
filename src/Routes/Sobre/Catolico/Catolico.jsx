//  -- Icons --  //
import {  FaPray as IconPray  } from 'react-icons/fa';
import {  FaBible as IconBible  } from 'react-icons/fa';
import {  FaCross as IconCross  } from 'react-icons/fa';

//  -- Style --  //
import "./Catolico.scss"



const Catolico = () => {
  return (
    <section className="Catolico">
      <section className="Catolico_Glass">
        <section className="Catolico_Glass__Top">
          <h2 className="Catolico_Glass__Top-Tittle">O que tem de "Diferente" em um G.E. Católico?</h2>
        </section>

        <ul className='CatolicoList'>
          <li className="CatolicoList_Item">
            <IconPray className="CatolicoList_Item__Icon" color="#f2f2f2"/> 
            <p className="CatolicoList_Item__Text">Momentos de espiritualidade e oração nas Atividades e Acampamentos.</p>
          </li>

          <li className="CatolicoList_Item">
            <IconBible className="CatolicoList_Item__Icon" color="#f2f2f2"/>
            <p className="CatolicoList_Item__Text">Vivência do Evangelho por meio de valores Escoteiros e Católicos.</p>
          </li>

          <li className="CatolicoList_Item">
            <IconCross className="CatolicoList_Item__Icon" color="#f2f2f2"/>
            <p className="CatolicoList_Item__Text">Celebrações de missas e momentos marianos de devoção.</p>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Catolico;
