import { useState, useEffect } from 'react';

//componentes
import Loader from '../components/Loader/Loader'
import Second from '../components/Second'

import '../components/Style.css';


const Home = ({}) => {

    const [loanding, setLoanding] = useState(false);



      //Peticion principal 
    const getHome = async () => {
            try {
              //Se inicializa el componente "Cargando"
              setLoanding(true);
  
              // Verificar conexión a Internet
              if (!navigator.onLine) {
                throw new Error('No hay conexión a Internet');
              }
  
              // Simular una pequeña demora antes de desactivar el loader (500ms en este ejemplo)
              setTimeout(() => {
                //Desactiva el componente "Cargando" y no se carga ningún error 
                setLoanding(false);
              }, 1500); // 500ms de retraso
  
            } catch (error) {
              setLoanding(false);
            }
    };



    useEffect(() => {
      getHome();
    }, []);
  
    return (
        <>
        {
        loanding ? (<Loader />):(
          <>
            <div className='header-container-main'></div>
            <Second/>

          </>
            )
        }
        </>

      
    );
  };

export default Home;