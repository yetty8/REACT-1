import React, { useState } from 'react';
import './App.css';
import Volcano from './VolcanoComponent/Volcano';
import Desert from './DesertComponent/Desert';
import Green from './GreenComponent/Green';
import Ocean from './OceanComponent/Ocean';


function App() {
  const [activeComponent, setActiveComponent] = useState('Volcano');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Volcano':
        return <Volcano />;
      case 'Desert':
        return <Desert />;
      case 'Ocean':
        return <Ocean />;
      case 'Green':
        return <Green />;
      default:
        return <Volcano />;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', width: '100%', zIndex: '1' }}>
        {renderComponent()}
      </div>
      <header style={{ 
        textAlign: 'center', 
        padding: '40px',
        position: 'relative',
        zIndex: '2',
        color: '#c7f48b'
      }}>
        <h1 style={{ marginBottom: '30px' }}>Welcome to Yetbarek's Page!</h1>
        <div style={{ display: 'flex', gap: '100px', justifyContent: 'center', backgroundColor: 'none', color: '#c7f48b' }}>
          <button onClick={() => setActiveComponent('Vocano')}>Vocano</button>
          <button onClick={() => setActiveComponent('Desert')}>Desert</button>
          <button onClick={() => setActiveComponent('Ocean')}>Ocean</button>
          <button onClick={() => setActiveComponent('Green')}>Green</button>
        </div>
      </header>
    </div>
  );
}

export default App;
