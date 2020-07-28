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
      <Route component= {()=> (<div>ERROR 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
