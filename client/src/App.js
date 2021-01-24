import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
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
import EditProfile from "./components/EditProfile";
import Post from "./components/Post";
// user context
import { UserContext } from "./components/Context/UserContext";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userData: undefined,
    token: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null || token === undefined) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const res = await Axios.post(
        "http://localhost:4000/api/login/isLoggedIn",
        null,
        {
          headers: { "x-access-token": token },
        }
      );
      if (res.data) {
        setUser({
          isLoggedIn: res.data.isLoggedIn,
          userData: res.data.user,
          token: res.data.token,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Container fluid>
          <Row>
            <Col xl={10} lg={11} md={12} sm={12} className='mx-auto'>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/category/:categ' component={ViewAllItems} />
                <Route
                  exact
                  path='/category/:categ/item/:id'
                  component={SignleItemDetails}
                />
                {/* ---- Protected Routes ---- */}
                <Route path='/post' component={Post} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/user/profile/edit' render={EditProfile} />
                <Route path='/user/profile' component={Profile} />

                <Route render={() => <h1>Sorry, nothing is here!</h1>} />
              </Switch>
              <Footer />
            </Col>
          </Row>
        </Container>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
