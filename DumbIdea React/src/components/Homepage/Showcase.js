import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';

import PanelBody from './PanelBody';
import PanelHeader from './PanelHeader';

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
            {childElements}
          </div>
      </div>
    );
  }
}

export default Showcase;
