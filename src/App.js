import "./App.css";
import Navbar from "./components/Navbar";
import EnterData from "./components/Data";
import Results from "./components/Results.js";
import { useState } from "react";
import DealerSite from "./components/DealerSite";
import axios from "axios";

function App() {
  const [dataEntered, setDataEntered] = useState("enter");
  const login = () => {
    console.log("login");
  };
  const signup = () => {
    console.log("signup");
    verifyCredentials({ name: "admin" });
  };
  async function verifyCredentials(details) {
    await axios.get(`/api/users/${details.name}`).then((response) => {
      console.log(response);
      pwd = response.data[0].password;
    });
  }
  return (
    <div className="App">
      <div className="mainCont">
        <Navbar login={login} signup={signup} />
        {dataEntered === "enter" && <EnterData />}
        {dataEntered === "results" && <Results dataEntered={dataEntered} />}
        {dataEntered === "dealer" && <DealerSite />}
      </div>
    </div>
  );
}

export default App;
