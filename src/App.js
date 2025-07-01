
import './App.css';
import React from 'react';
import Main from './invoiceGenerator/components/react/Main.js'; 
import { useContext,useEffect } from 'react';
import { InvoiceGeneratorContext } from './invoiceGenerator/components/react/Context.js';
function App() {
  const{isdarktheme}=useContext(InvoiceGeneratorContext)
  useEffect(() => {
    if (isdarktheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }

    // Cleanup when component unmounts (optional)
    return () => {
      document.body.classList.remove('dark');
      document.body.classList.remove('light');
    };
  }, [isdarktheme]);

 
    return(
    <div className="App">
      <header className="App-header">
        <Main ></Main>
      </header>
    </div>
  );
}
export default App;
