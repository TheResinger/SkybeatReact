import React, { useState, useContext } from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { AuthContext } from '../Context/AuthContext';

const Login = props => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmitClick = event => {
    event.preventDefault();
    AuthService.login(user).then(data => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push('/');
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <div className="form-group container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 card" style={{marginTop: "1em"}}>
          <br />
          <h3 className="mb-4 mt-0 text-center">Please Sign In</h3>
          <form onSubmit={onSubmitClick}>
            <div className="form-group row">
              <label htmlFor="username" className="col-sm-3 col-form-label" >Username:</label>
              <div className="col-sm-9">
              <input type="text" name="username" onChange={onChange} className="form-control" placeholder="Enter Username" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-sm-3 col-form-label" >Password:</label>
              <div className="col-sm-9">
              <input type="password" name="password" onChange={onChange} className="form-control" placeholder="Enter Password" />
              </div>
            </div>
            <button className="btn btn-large btn-primary btn-block" type="submit"> Log In </button>
          </form>
          <br />
        </div>
          {message ? <Message message={message} /> : null}
        <div className="col-md-2"></div>

        
      </div>
    </div>
  );
};

export default Login;
