import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import ValHeader from "./components/ValHeader";
import ValJumbotron from './components/ValJumbotron';
import ValFooter from './components/ValFooter';
import ValidatrHome from "./pages/ValidatrHome";
import NeverMind from "./pages/NeverMind";

class App extends Component {

  render() {
    return (
    <Router> 
      <div>
        <Container>
          <ValHeader />
          <ValJumbotron />

          
          <Route path="/" exact component={ValidatrHome} />
          <Route path="/nevermind" exact component={NeverMind} />
          <ValFooter />
        </Container>
      </div> 
    </Router>
  );
  };
  
}

export default App;
