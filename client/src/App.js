import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./routes/Home";
import Saved from "./routes/Saved";
import Settings from "./routes/Settings";
import Body from "./component/Body";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Body />} >
          <Route path="/"  element={<Home />}/>
          <Route path="/saved"  element={<Saved />}/>
          <Route path="/settings"  element={<Settings />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
