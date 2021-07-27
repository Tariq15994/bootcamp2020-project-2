import React , {useState} from 'react';
import NavBar from './components/navbar';
import PageSelector from './components/pageSelector'
import FootNav from './components/footNav';
import './App.css';

function App() {
  const screenConfig = useState(0);
  return (
    <div>
    <NavBar />
    <PageSelector currentScreen={screenConfig[0]} />
    <FootNav screenConfig = {screenConfig} className='footNav' />
    
    </div>
  );
}

export default App;
