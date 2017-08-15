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
      ideas : [
        {
          name: "Ý tưởng 1",
          owner: "Ai đó",
          category: "Dump",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/15350457_1283200718367545_816522488315573096_n.jpg?oh=dc56b7b35a24f2d8a938d9193a686d6b&oe=5A3499C2",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        },
        {
          name: "Ý tưởng 2",
          owner: "Ai đó tiếp",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/12923210_1093739797313639_6147260870900316871_n.jpg?oh=ee44133c404fc47577c500bb525682cc&oe=5A28D98C",
          category: "Dump",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        },
        {
          name: "Ý tưởng 3",
          owner: "Ai đó nữa",
          category: "Dump",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/18700274_1458721910815424_2974439331255303530_n.jpg?oh=3123c8573459be9691d3ae54de9b3f6a&oe=5A364B4A",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        },
        {
          name: "Ý tưởng 4",
          owner: "Ai đó cuối cùng",
          category: "Other",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/14051743_1183824431638508_6612438782977328747_n.jpg?oh=bf11a8c7eeb7572beb8ba22ce72b37ff&oe=5A3966DC",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        }        
      ]
    }
  }

  componentDidMount() {
    $.ajax({
      url :'/api/idea',
      type: 'get'
    }).done(data => {
      this.setState({
        ideas : data
      });
    }).fail(err => {
      console.error(err);
    })
  }
  
  render() {
    var childElements = this.state.ideas.map(function(idea) {
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
