import React, { Component } from 'react';

import Carousel from '../components/Homepage/Carousel';
import Showcase from '../components/Homepage/Showcase';
import ShowcaseList from '../components/Homepage/ShowcaseList';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel />
        <Showcase />
        <Showcase />
        <ShowcaseList />
      </div>
    );
  }
}

export default Home;
