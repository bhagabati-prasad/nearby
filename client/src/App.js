import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import SignleItemDetails from "./components/ViewItem/SignleItemDetails";
import ViewAllItems from "./components/ViewItem/ViewAllItems";
import Login from "./components/Registration/Login";
import Signup from "./components/Registration/Signup";
import Profile from "./components/Profile";
import Post from "./components/Post";
// context provider
import { UserProvider } from "./components/Context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
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
                <Route exact path='/category/:categ' component={ViewAllItems} />

                <Route path='/post' component={Post} />

                <Route
                  exact
                  path='/category/:categ/item/:id'
                  component={SignleItemDetails}
                />
                <Route
                  exact
                  path='/user/profile/edit'
                  render={() => <h1>Edit profile</h1>}
                />
                <Route path='/user/profile' component={Profile} />

                <Route render={() => <h1>Sorry, nothing is here!</h1>} />
              </Switch>
              <Footer />
            </Col>
          </Row>
        </Container>
      </UserProvider>
    </Router>
  );
}

export default App;
