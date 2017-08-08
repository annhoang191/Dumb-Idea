import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import Showcase from '../components/Showcase';
import ShowcaseList from '../components/ShowcaseList';
class Home extends Component {
  render() {
    return (
      <div classNameName="Home">
        <Carousel />
        <Showcase />
        <Showcase />
        <ShowcaseList />
      </div>
    );
  }
}

export default Home;
