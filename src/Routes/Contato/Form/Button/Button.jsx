//  -- Database --  //
import {  
    getDatabase, 
    ref, 
    set, 
} from 'firebase/database';

//  -- Router --  //
import {  useNavigate  } from "react-router";

//  -- Style --  //
import "./Button.scss";



const Button = (  props  ) => {
  
  const {  name, email, phone, text  } = props;
  const navigate = useNavigate();




  function sendContato() {
    if (  name !== "" && email !== "" && phone !== "" && text !== ""  ) {
    

      //  -- Parte do Firebase/Database --  //

      const todayDate = new Date();
      const [  year, month, day, hours, minutes  ] = [
        todayDate.getFullYear(),
        todayDate.getMonth(),
        todayDate.getDate(),
        todayDate.getHours(),
        todayDate.getMinutes()
      ];
      const userCreationTime = `${year}-${month}-${day}-${hours}-${minutes}`;




      const dbRef = ref(  getDatabase(), `/Contato/user${userCreationTime}`);
      set(  dbRef, {
        name: name,
        email: email,
        phone: phone,
        text: text,
        open: true,
        time: userCreationTime
      }).then(  () => {

          navigate("/ContatoConcluido/");

      }).catch(  error => {
          console.log("Deu erro!", error);
        })

    } 
    else {
      var variables = [  
        {  var: name, text: "Nome"  }, 
        {  var: email, text: "Email"  }, 
        {  var: phone, text: "Telefone"  }, 
        {  var: text, text: "Motivo"  }  
      ];
      
      variables.forEach(  item => {
        if (  item.var === ""  ) {
          alert(`Campo de ${item.text} vazio!!!`);
        }
      })
      return;
    }
  }




  return (
    <section className="FormBtn">
      <button
        className="FormBtn_Button"
        onClick={  e => {
          e.preventDefault();
          sendContato();
        }}
      >
        Enviar!
      </button>
    </section>
  );
}

export default Button;
