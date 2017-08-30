import $ from 'jquery';

const serverUrl = 'http://localhost:8888/api';

const login = (username, password) => {
  console.log('login', username, password);

  return new Promise((resolve, reject) => {
    $.ajax({
      url: serverUrl + '/user/login',
      type: 'post',
      data: {
        username: username,
        password: password
      },
      headers : {
        'Accept': 'application/json'
      }
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const register = (username, password, email) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: serverUrl + '/user/',
      type: 'post',
      data: {
        username: username,
        password: password,
        email: email
      },
      headers : {
        'Accept': 'application/json'
      }
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const verify = (token) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: serverUrl + '/user/',
      type: 'get',
      data: {
        token: localStorage.token
      },
      headers : {
        'Accept': 'application/json'
      }
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
}

export default {
  serverUrl,
  login,
  register,
  verify
}