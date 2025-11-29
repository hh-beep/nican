//  -- Styles --  //
import "./Form.scss"

//  -- Components --  //
import Inputs from "./Inputs/Inputs";
import Button from "./Button/Button";

//  -- React --  //
import {  
  useState
} from "react";





const Form = () => {


  const [  name, setName  ] = useState("");
  const [  email, setEmail  ] = useState("");
  const [  phone, setPhone  ] = useState("");
  const [  text, setText  ] = useState("");



  return (
    <section className="BlankSection">
      <form className="Form">
        

        <section className="Form_Top">
          <h2 className="Form_Top__Tittle">Nos fale suas informacoes e entre pra nossa fraternidade!</h2>
        </section>


        <Inputs 
          name={  name  } setName={  setName  }
          email={  email  } setEmail={  setEmail  }
          phone={  phone  } setPhone={  setPhone  }
          text={  text  } setText={  setText  }
        />


        <Button 
          name={  name  }
          email={  email  }
          phone={  phone  }
          text={  text  }
        />


      </form>
    </section>
  )
}

export default Form;
