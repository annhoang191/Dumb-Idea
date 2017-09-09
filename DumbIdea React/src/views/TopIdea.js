import React, { Component } from 'react';

// import MostPopularIdea from '../components/MostPopularIdea';
import FilterBox from '../components/FilterBox';
import ListBox from '../components/ListBox';
class TopIdea extends Component {
  render() {
    return (
      <div className="TopIdea">
        <section className="top-section">
          <div className="container">
            <h2 className="top-header text-center">Những ý tưởng được đánh giá cao nhất trong tuần</h2>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ListBox />
            </div>
            <div className="col-md-4">
              <FilterBox />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TopIdea;
