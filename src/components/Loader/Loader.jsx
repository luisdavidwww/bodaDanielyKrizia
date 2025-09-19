import { Suspense } from 'react';
import LogoDK from '../../images/dk.svg';
 

// Estilos de diseño
import "./Loader.css"

const Loader = () => {


  return (
    <div className='loanding__Container'>
      <div style={{ display: "flex", right: "0%" }} > 
        <div> 
              <Suspense fallback={<div></div>}>
                <img src={LogoDK} className='logo_miceven' />
              </Suspense>
        </div>  
      </div>
    </div>
  );
}

export default Loader;