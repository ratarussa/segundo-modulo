import React from "react"
import ContactoContainer from "./containers/contacto/Contacto"
import './App.css'
import HeaderContainer from "./containers/header/Header";


function App() {
  return (
    <div className="App container py-3">
      <HeaderContainer />
      <ContactoContainer />
    </div>
  );
}

export default App;
