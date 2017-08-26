import $ from 'jquery';

const serverUrl = 'http://localhost:8888/api';


const Authentication = {
  login: (username, password) => {
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

    // return fetch(serverUrl + '/user/login', {
    //   method: 'POST',

    //   mode: 'no-cors',
    //   body: JSON.stringify({
    //     username: username,
    //     password: password
    //   })
    // });


  },

  register: (username, password, email) => {
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
  },

  verify: (token) => {
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
};

export default Authentication;