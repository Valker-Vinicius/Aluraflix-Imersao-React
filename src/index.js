/* eslint-disable linebreak-style */

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Home from "./pages/home"
import registerVideo from "./pages/register/video"
import registerCategory from "./pages/register/category"

import { BrowserRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path= "/" component= {Home} exact />
      <Route path= "/register/video" component= {registerVideo} />
      <Route path= "/register/category" component= {registerCategory} />
      <Route component= {()=> (
        <div align= "center" style= {{"margin-top": "-80px"}}>
          <h1 style= {{"display": "inline"}}>ERROR 404</h1>
          <p>The requisited page doesn't exist, please verify your address or play this awesome game XD</p>
          <iframe 
            height= "400px" 
            width= "100%" 
            src="https://editor.p5js.org/Valker-Vinicius/embed/B2fT4YM5j"
          >
          </iframe>
        </div>
      )} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
