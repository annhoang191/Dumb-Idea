import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import MainNav from './components/MainNav';
import Home from './views/Home';
import Footer from './components/Footer';
import Page404 from './views/Page404'
import About from './views/About';
import TopIdea from './views/TopIdea';
import All from './views/All';
import AddNewIdea from './views/AddNewIdea'

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
