import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import NewReview from './Components/NewReview';
import Admin from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/register" component={Register} />
      <PrivateRoute path="/newreview" roles={['user', 'admin']} component={NewReview} />
      <PrivateRoute path="/admin" roles={['admin']} component={Admin} />
    </Router>
  );
}

export default App;
