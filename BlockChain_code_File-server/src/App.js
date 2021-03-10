import React from 'react'
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/NavBar";
import {Route,BrowserRouter} from "react-router-dom";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Foot from "./Components/Foot/Fooot"
import Nav2 from "./Components/Nav2/NavBar";
function App() {
  return (
    <BrowserRouter >
    
    
      <Route exact path="/upload/home">
        <Nav2/>
        <Home />
      </Route>
      <Route  path="/upload/certificate/:string">
        <Nav/>
        <Page2/>
      </Route>
      <Route  path="/upload/page1">
        <Nav2/>
        <Page3/>
      </Route>
    <Foot/>  
    </BrowserRouter>
  );
}

export default App;
