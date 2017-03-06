const React = require("react"),
      ReactDOM = require("react-dom"),
      Main = require("./Main.jsx"),
      About = require("./About.jsx"),
      {Router, Route, hashHistory, IndexRoute} = require("react-router");


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}>

      </Route>
    </Route>
  </Router>
  , document.querySelector("#app"));
