import Userinput from "./component/Userinput";
import "./App.css"
import Useroutput from "./component/Useroutput";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Popoola")
  function changeName (e) {
    setUsername(e.target.value)
  }
        return (
          <div className="App">
          <Userinput change={changeName}/>
          <Useroutput username= "Abiodun" address= "Ikorodu, Lagos."/>
          <Useroutput username= {username} address= "Apapa, Lagos."/>
          </div>
        );
    }
    

export default App;