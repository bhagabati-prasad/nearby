import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Axios from 'axios';
import { ProtectedRoute, ReverseProtectedRoute } from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Registration/Login';
import Signup from './components/Registration/Signup';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Post from './components/Post';
import ViewAllItemsCateg from './components/ViewItem/ViewAllItemsCateg';
import ViewAllItemsSubCateg from './components/ViewItem/ViewAllItemsSubCateg';
import SingleItemDetails from './components/ViewItem/SignleItemDetails';
// user context
import { UserContext } from './components/Context/UserContext';
import { ItemProvider } from './components/Context/ItemContext';
import { NavMenuProvider } from './components/Context/NavMenuContext';
import { LocationProvider } from './components/Context/LocationContext';
import Mapbox from './components/Homepage/Mapbox';
import { PROXY } from './env';
import Compare from './components/compare';

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userData: undefined,
    token: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null || token === undefined) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const res = await Axios.post(PROXY + '/api/login/isLoggedIn', null, {
        headers: { 'x-access-token': token },
      });
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
            <LocationProvider>
              <Col xl={11} lg={11} md={12} sm={12} className='mx-auto'>
                <ItemProvider>
                  <Navbar />
                  <NavMenuProvider>
                    <Switch>
                      <Route exact path='/' component={Homepage} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/contact' component={Contact} />
                      <Route exact path='/compare' component={Compare} />
                      <Route
                        exact
                        path='/map'
                        render={() => <Mapbox width='80vw' height='68vh' />}
                      />
                      <Route
                        exact
                        path='/category/:categ'
                        component={ViewAllItemsCateg}
                      />
                      <Route
                        exact
                        path='/category/:categ/subcategory/:subcateg'
                        component={ViewAllItemsSubCateg}
                      />
                      <Route
                        exact
                        path='/category/:categ/item/:id'
                        component={SingleItemDetails}
                      />
                      {/* ---- Protected Routes ---- */}
                      <ProtectedRoute
                        path='/post'
                        isAuth={user.isLoggedIn}
                        component={Post}
                      />
                      <ReverseProtectedRoute
                        exact
                        isAuth={user.isLoggedIn}
                        path='/login'
                        component={Login}
                      />
                      <ReverseProtectedRoute
                        exact
                        isAuth={user.isLoggedIn}
                        path='/signup'
                        component={Signup}
                      />
                      <Route
                        exact
                        isAuth={user.isLoggedIn}
                        path='/user/profile/edit'
                        render={EditProfile}
                      />
                      <Route
                        path='/user/profile'
                        isAuth={user.isLoggedIn}
                        component={Profile}
                      />

                      <Route
                        render={(props) => (
                          <Redirect
                            to={{
                              pathname: '/',
                              state: { from: props.location },
                            }}
                          />
                        )}
                      />
                    </Switch>
                  </NavMenuProvider>
                </ItemProvider>
                <Footer />
              </Col>
            </LocationProvider>
          </Row>
        </Container>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
