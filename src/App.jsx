import Map from './Map'
import './App.css'
import MarkerDetails from './MarkerDetails'
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMarkerDetails = () => {
    // Atualize o estado para mostrar o MarkerDetails quando o marcador for clicado.
    setIsVisible(!isVisible);
  };

  return (
    <>
      <main>
        <Map onPopUpClick={toggleMarkerDetails} />
        {isVisible && <MarkerDetails toggleVisible={toggleMarkerDetails} />}
      </main>
    </>
  );
}


export default App