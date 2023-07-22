import React, {
  useState,
  useEffect
} from 'react';

/*  Firebase  */
import {
  ref,
  onValue,
  getDatabase
} from "firebase/database";

/*  Components  */
import AvisosTitulo from "./AvisosTitulo/AvisosTitulo";
import AvisosItem from "./AvisosItem/AvisosItem";

/*  Style  */
import Noticias_Style from "./Avisos_Style";
import "./Avisos_Styles.scss"





const style = Noticias_Style();





const Avisos = () => {

  const [todosAvisos, setTodosAvisos] = useState([])
  const [loading, isLoading] = useState(true)


  useEffect(() => {
    const dbRef = ref(getDatabase(), "/Avisos/TodosAvisos")

    onValue(dbRef, (snap) => {
      setTodosAvisos(  Object.values(snap.val())  )
      isLoading(  false  )
    })
  }, [])


  return (
    <section className={  style.container  }>
      <section className={  style.containerSection  }>


        <AvisosTitulo />

        <section className={  style.containerSectionList  }>
          {!loading ? 
            (todosAvisos.slice(0, 5).map(  (item, key) => {
              return (
                <AvisosItem 
                  key={  key  }
                  item={  item  }
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

export default Avisos;