//  -- Styles --  //
import "./Form.scss"


//  -- Database --  //
import {  
    getDatabase, 
    ref, 
    onValue  
} from 'firebase/database';

//  -- React --  //
import {  
  useEffect,
  useState
} from "react";





const Form = () => {
  return (
    <section className="BlankSection">
      <form className="Form">
        <section className="Form_Top">
          <h2 className="Form_Top__Tittle">Nos fale suas informacoes e entre pra nossa fraternidade!</h2>
        </section>


      </form>
    </section>
  )
}

export default Form;
