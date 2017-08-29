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
      email: ''
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

  onChangeEmail = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  doRegister = (e) => {
    e.preventDefault();
    Authentication.register(this.state.username, this.state.password, this.state.email).then(data => {
      console.log('Data', data);
      if (data.message) {
        this.props.history.push('/');
      } else {

      }
    })
    .catch(
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="AuthForm">
        <form action="">
          <TextField type='text' placeholder='Username' onChange={this.onChangeUsername} />
          <TextField type='password' placeholder='Password' onChange={this.onChangePassword} />
          <TextField type='email' placeholder='Email' onChange={this.onChangeEmail} />
          <Button label='Register' method='post' onClick={this.doRegister} />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
