import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Masonry from 'react-masonry-component';

import PanelBody from './PanelBody';
import PanelHeader from './PanelHeader';

const masonryOptions = {
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.Idea',
  // use element for option
  columnWidth: '.Idea',
  percentPosition: true
};

class Showcase extends Component {
  constructor() {
    super();
    this.state={
      ideasDisplay : [],
      ideas : []
    }
  }

  componentDidMount() {
    $.ajax({
      url :'/api/idea/getAllRecommendation',
      type: 'get'
    }).done(data => {
      this.setState({
        ideasDisplay : data
      });
    }).fail(err => {
      console.error(err);
    })
  }

  render() {
    var childElements = this.state.ideasDisplay.map(function(idea) {
      return (
        <PanelBody {...idea}/>
      );
    });

    return (
      <div className="Showcase container panel panel-default">
          <PanelHeader panelTitle={this.props.panelTitle}/>
          <div className="row">
            <Masonry
                className={'list-ideas'} // default ''
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
              {childElements}
            </Masonry>
          </div>
      </div>
    );
  }
}

export default Showcase;
