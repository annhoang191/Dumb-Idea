import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';

import PanelBodyList from './PanelBodyList';

class ShowcaseList extends Component {
  constructor() {
    super();
    this.state={
      ideas : [
        {
          name: "Ý tưởng 5",
          owner: "Ai đó",
          category: "Dump",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/14051743_1183824431638508_6612438782977328747_n.jpg?oh=bf11a8c7eeb7572beb8ba22ce72b37ff&oe=5A3966DC",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        },
        {
          name: "Ý tưởng 6",
          owner: "Ai đó tiếp",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/12734112_1063915146962771_5770371503860085569_n.jpg?oh=36e07dd0ea28cbfee0f9cd778193ea31&oe=59EC538A",
          category: "Dump",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        },
        {
          name: "Ý tưởng 7",
          owner: "Ai đó nữa",
          category: "Dump",
          photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/18402725_1440992389255043_7914228059738024094_n.jpg?oh=a3717378d344416ce3a5cfe9eb5ebd65&oe=5A20010B",
          briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis sagittis nisi, quis dignissim felis hendrerit in. Vivamus tincidunt rutrum nisi in luctus. Ut eget eleifend mauris. Etiam blandit convallis ligula quis condimentum. Donec eu ante risus. Sed aliquam mollis sapien. Aliquam vel risus placerat, convallis purus id, scelerisque velit. Aliquam quis ligula turpis."
        }
      ]
    }
  }

  componentDidMount() {
    $.ajax({
      url :'/api/list/idea',
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
        <PanelBodyList {...idea}/>
      );
    });

    return (
      <div className="ShowcaseList container">
        <div className="panel panel-default">
          <div className="panel-heading">
            Các ý tưởng nổi bật khác
          </div>
          {childElements}
          <hr />
          <div className="text-center">
            <button className="btn btn-md btn-default load-more" id="see-more"><i className="fa fa-refresh">&nbsp;</i><span>Xem tất cả</span></button>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default ShowcaseList;
