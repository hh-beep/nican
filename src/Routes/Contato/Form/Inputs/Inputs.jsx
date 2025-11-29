//  -- Styles --  //
import "./Inputs.scss";



const Inputs = (  props  ) => {
  
  const {
    name, setName,
    email, setEmail,
    phone, setPhone,
    text, setText
  } = props;





  return (
    <section className="FormInputs">
     
      <section className="FormInputs_Area">
        <h4 className="FormInputs_Area__Text">Digite seu Nome: </h4>
        <input 
          placeholder="Nome: " 
          type="text"
          value={  name  }
          onChange={  (e) => {  setName(  e.target.value  )  }}
          className="FormInputs_Area__Input"
        />
      </section>


      <section className="FormInputs_Area">
        <h4 className="FormInputs_Area__Text">Digite seu Email de contato:</h4>
        <input 
          placeholder="Email: "
          type="email"
          value={  email  }
          onChange={  e => {  setEmail(  e.target.value  )  }}
          className="FormInputs_Area__Input"
        />
      </section>
    

      <section className="FormInputs_Area">
        <h4 className="FormInputs_Area__Text">Digite seu Telefone:</h4>
        <input 
          placeholder="Telefone [Exemplo]: (45) 99811-9988: "
          type="phone"
          value={  phone  }
          onChange={  e => {  setPhone(  e.target.value  )  }}
          className="FormInputs_Area__Input"
        />
      </section>




      <section id="FormInput_TextArea" className="FormInputs_Area">
        <h4 className="FormInputs_Area__Text">Escreva aqui o teu motivo para contato (Entrar para o grupo/Participar de uma atividade):</h4>
        <textarea
          placeholder="Digite aqui! "
          value={  text  }
          onChange={  e => {  setText(  e.target.value  )  }}
          className="FormInputs_Area__Input"
        />
      </section>

    </section>
  );
}

export default Inputs;
