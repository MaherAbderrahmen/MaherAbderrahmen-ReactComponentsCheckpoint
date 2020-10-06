import React from 'react';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="photo">
        <ProfilPhoto/>
        </div>
      <br></br>
      <div className="name">
        <FullName/>
        </div>
        <br></br>
      <div className="adress">
        <Adress/>
        </div>

      




    </div>
  );
}

export default App;
