import React, {
  useEffect,
  useState
} from 'react';

/*  Firebase  */
import {  getDatabase, ref, onValue  } from "firebase/database"


/*  Components */
import SobreItem from "./SobreItem/SobreItem";
import SobreTitulo from "./SobreTitulo/SobreTitulo";

/*  Style  */
import Sobre_Style from "./Sobre_Style";
import "./Sobre_Styles.scss"





const style = Sobre_Style(); 




const Sobre = () => {

  const [myState, setMyState] = useState([])
  const [loading, isLoading] = useState(true)
  

  useEffect(() => {
    const dbRef = ref(getDatabase(), "/Atividades/Principais/")

    onValue(dbRef, (snap) => {
      setMyState(Object.values(snap.val()))
      isLoading(false)
    })
  }, [])


  console.log(myState)


  return (
    <section className={  style.container  }>
      <section className={  style.containerSection  }>


      <SobreTitulo />

      <section className={  style.containerSectionList  }>
        {!loading ? 
          (myState.map(  (item, key) => {
              return (
                <SobreItem 
                  key={  key  }
                  item={  item  }
                  whatKey={  key  }
                />
              )
          })) 
          : 
          (  <div>Carregando...</div>  )
        }
      </section>


      </section>
    </section>
  )
}

export default Sobre;