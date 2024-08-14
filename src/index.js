import React from "react";
import ReactDOM from "react-dom";
import './components/style.css';
import Myweb from "./components/header.js";
import Content from "./components/content.js";
import Foot from "./components/footer.js";
const App = () => (
<div>
  <Myweb/>
  <Content/>
  <Foot/>
</div>
);
ReactDOM.render(<App/>,document.getElementById('root'));
