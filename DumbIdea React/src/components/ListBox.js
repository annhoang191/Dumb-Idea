import React, { Component } from 'react';
import Box from './TopIdea/Box';

import $ from 'jquery';

class ListBox extends Component {
  constructor() {
    super();

    this.state = {
      ideasDisplay : [],
      pageNo       : 1,
      isLoading    : false
    }
  }

  componentDidMount() {
    this.requestNextPage();
    $(window).on('scroll', this.checkScroll.bind(this));
  }

  checkScroll() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
        if(!this.state.isLoading) this.requestNextPage();
      }
    }

  requestNextPage() {
    // Set Is loading true
    this.setState({
      isLoading : true
    })
    // Query
    $.ajax({
      url  : '/api/idea/getAll/' + this.state.pageNo,
      type : 'get'
    }).done( data => {
      console.log('Data in list box: ' + data);
      this.setState({
        ideasDisplay  : this.state.ideasDisplay.concat(data),
        pageNo        : this.state.pageNo + 1
      })
    }).fail( err => {
      console.log('ERROR in ajax List Box: ' + err);
    }).always( () => {
      // Set Is loading true
      this.setState({
        isLoading : false
      })
    })
  }

  render() {
    var childElements = this.state.ideasDisplay.map(function(idea) {
      return (
        <Box {...idea} />
      );
    });

    return (
      <div className="ListBox">
        <div className="list-idea">
          <div className="white-box white-box-waiting-list">
              <div className="list-post waiting-list">
                  <header className="clearfix">
                      <h4 className="pull-left">Tất cả ý tưởng</h4>
                      <div className="pull-right">
                          <ul className="list-inline">
                              <li><span>Sắp xếp theo</span></li>
                              <li>
                                  <select id="orderby" className="form-control font-size-12 border-radius-3">
                                      <option value="2">Thời gian đăng gần nhất</option>
                                      <option value="3">Thời gian đăng xa nhất</option>
                                  </select>
                              </li>
                          </ul>
                      </div>
                  </header>
                  <hr />
                  { childElements }
              </div>
              <div className="text-center">
                  <button className="btn btn-md btn-default load-more" id="see-more"><i className="fa fa-refresh">&nbsp;</i><span>Xem thêm</span></button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ListBox;
