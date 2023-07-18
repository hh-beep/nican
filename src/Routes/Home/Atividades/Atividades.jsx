import React, {
  useEffect,
  useState
} from 'react';

/*  Firebase  */
import {  getDatabase, ref, onValue  } from "firebase/database"


/*  Components */
import AtividadesItem from "./AtividadesItem/AtividadesItem";
import AtividadesTitulo from "./AtividadesTitulo/AtividadesTitulo";

/*  Style  */
import Atividades_Style from "./Atividades_Style";
import "./Atividades_Styles.scss"





const style = Atividades_Style(); 




const Atividades = () => {

  const [todasAtividades, setTodasAtividades] = useState([])
  const [loading, isLoading] = useState(true)


  useEffect(() => {
    const dbRef = ref(getDatabase(), "/Atividades/TodasAtividades")

    onValue(dbRef, (snap) => {
      setTodasAtividades(  Object.values(snap.val())  )
      isLoading(  false  )
    })
  }, [])




  return (
    <section className={  style.container  }>
      <section className={  style.containerSection  }>


      <AtividadesTitulo 
        items={  todasAtividades  }
      />

      <section className={  style.containerSectionList  }>
        {!loading ? 
          (todasAtividades.slice(0, 5).map(  (item, key) => {
              return (
                <AtividadesItem 
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

export default Atividades;