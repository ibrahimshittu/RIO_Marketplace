import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

function App() {

  const supportedChainIds = [4];

  const connectors = {
    injected: {},
  };

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(isMobile);
  if(!isMobile){

    return (
        <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <di>
          <Header />
          <Home/>
        </di>
      </ThirdwebWeb3Provider>
          
    ); }
    else{
      return (<div style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       height: '100vh', //align text to middle
        fontSize: '30px',
        backgroundColor: '#000',
        textAlign: 'center'
    }}>This website uses Metamask which is only available on PC, Use Your PC please.</div>)
    }

}

export default App;
  