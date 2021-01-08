import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import SignleItemDetails from "./components/ViewItem/SignleItemDetails";
import ViewAllItems from "./components/ViewItem/ViewAllItems";

import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Services/Login";
import Signup from "./components/Services/Signup";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xl={10} lg={11} md={12} sm={12} className='mx-auto'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />

              <Route exact path='/:categ' component={ViewAllItems} />
              <Route path='/:categ/:id' component={SignleItemDetails} />
              {/* 
              <Route exact path='/category/:categ' component={ViewAllItems} />
              <Route path='/category/:categ/item/:id' component={SignleItemDetails} />
              */}
              <Route render={() => <h1>Sorry, nothing is here!</h1>} />
            </Switch>
            <Footer />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
