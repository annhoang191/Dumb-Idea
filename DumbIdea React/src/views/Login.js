import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

import Authentication from './Authentication.js';
import TextField from '../components/TextField';
import Button from '../components/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onChangeUsername = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }

  doLogin = (e) => {
    e.preventDefault();
    console.log('doLogin', this.state.username, this.state.password);
    Authentication.login(this.state.username, this.state.password).then(data => {
      console.log('Data', data);
      if (data.token) {
        console.log(data);
        localStorage.token = data.token;
        localStorage.userId = data.userId;
        this.props.history.push('/');
      } else {
        localStorage.token = null;
        localStorage.userId = null;
        alert(data.err || "Cannot login");
      }
    }, err => {
      localStorage.token = null;
      localStorage.userId = null;
      alert(err.responseJSON.error);
    });
  }

  render() {
    return (
      <div className="AuthForm">
        <form action="">
          <TextField type='text' placeholder='Username' onChange={this.onChangeUsername} />
          <TextField type='password' placeholder='Password' onChange={this.onChangePassword} />
          <Button label='Login' method='post' onClick={this.doLogin} />
          <p>Not register yet? Register now</p>
          <Link to={'/register'} className="btn btn-info" role="button">Register</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
