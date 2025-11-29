//  -- React Stuff --  //
import {  
    useState, 
    useEffect  
} from "react"; 

//  -- Firebase (Database) --  //
import {  
    getDatabase, 
    ref, 
    onValue  
} from 'firebase/database';

//  -- Components --  //
import Navigation from "../Navigation/Navigation";
import Start from "./Start/Start";
import Sobre from "./Sobre/Sobre";
import Noticias from "./Noticias/Noticias";
import Conheca from "./Conheca/Conheca";
import Footer from "../Footer/Footer";



const Home = () => {

    //  -- Variavel do tipo state (variavel de react) --  //
    const [db, setDb] = useState({})

    //  --  UseEffects -> Vai carregar este codigo quando a pagina carregar --  //
    useEffect(  () => {
        /*
         *  A variavel ref recebe o banco de dados (com o getDatabase()), e dps
         *  efine como ponto de refecencia desse banco de dados o texto na
         *  string, ou seja, vai referenciar todos os valores no caminho "/Noticias"
         *  do firebase
         * 
         */
        const dbRef = ref(  getDatabase(), "/Noticias"  );
        /*
         *
         *  Agora, o onvalue abaixo vai Ler todos os valores de dentro do
         *  ponto de referencia definido na variavel ref, sendo snap o valor
         *  que vai retornar da busca pela referencia no firebase
         * 
         */
        onValue(  dbRef, (snap) => {
            setDb(snap.val());     
        })
    }, [])




    return (
        <main>
            {/*  The NavBar Module import goes here :D */}
            <Navigation />

            <Start />
            <Sobre /> 
            <Noticias noticiasInfos={  db !== undefined ? db : {}  }/> 
            <Conheca />  

            <Footer />

        </main>
    )
}

export default Home;
