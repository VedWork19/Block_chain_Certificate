import React from 'react'
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/NavBar";
import {Route,BrowserRouter,Switch} from "react-router-dom";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Foot from "./Components/Foot/Fooot"
import Nav2 from "./Components/Nav2/NavBar";
import ErrorPage from "./Components/Error/Error";
function App() {
  return (
    <BrowserRouter >
    
    
      <Switch>
      <Route exact path="/upload/home">
        <Nav2/>
        <Home />
      </Route>
      <Route  exact path="/upload/certificate/:string">
        <Nav/>
        <Page2/>
      </Route>
      <Route  exact path="/upload/page1">
        <Nav2/>
        <Page3/>
      </Route>
      <Route  path="/error_page">
          <Nav/>
          <ErrorPage />
      </Route>
      <Route >
          <Nav/>
          <ErrorPage/>
      </Route>
    <Foot/>  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
