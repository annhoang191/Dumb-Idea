import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

import Header from './components/Header';
import MainNav from './components/MainNav';
import Profile from './views/Profile';
import Home from './views/Home';
import Footer from './components/Footer';
import Page404 from './views/Page404'
import About from './views/About';
import TopIdea from './views/TopIdea';
import All from './views/All';
import AddNewIdea from './views/AddNewIdea';
import Login from './views/Login';
import Register from './views/Register';
import IdeaDetail from './views/IdeaDetail';
import EditIdea from './views/EditIdea';

class App extends Component {
  render() {
    const routes = [
      {
        path      : '/',
        exact     : true,
        component : Home
      },
      {
        path      : '/about',
        exact     : true,
        component : About
      },
      {
        path      :'/topidea',
        exact     : true,
        component : TopIdea
      },
      {
        path      :'/all',
        exact     : true,
        component : All
      },
      {
        path      : '/addnewidea',
        exact     : true,
        component : AddNewIdea
      },
      {
        path      : '/login',
        exact     : true,
        component : Login
      },
      {
        path      : '/register',
        exact     : true,
        component : Register
      },
      {
        path      : '/profile/:id',
        exact     : true,
        component : Profile
      },
      {
        path      : '/idea/:id',
        exact     : true,
        component : IdeaDetail
      },
      {
        path      : '/editidea/:id',
        exact     : true,
        component : EditIdea
      },
      {
        path      : '*',
        component : Page404
      }
    ];
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Switch>
              {routes.map((route,index) =>(
                <Route key={index} {...route} />
              ))}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
