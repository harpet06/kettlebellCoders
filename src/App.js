import React from "react";
import "./App.css";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import logo from "./kettlebell.svg";


function App() {
  return (
    <div className="App">
      <Header headerTitle="kettlebellCoders" logo={logo} expand="lg"/>
      <Main/>
      <footer>
      <Header fixed="bottom" />
      </footer>
    </div>
  );
}

export default App;
