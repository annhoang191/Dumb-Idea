import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import $ from 'jquery';

class CommentElement extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  componentDidMount() {
    this.setState({
      date: new Date(this.props.createdAt)
    });
    console.log('date', new Date(this.props.createdAt));

    console.log(this.props.content);
    console.log('start ajax', this.props.author);
    $.ajax({
      url:'/api/user/' + this.props.author,
      type : 'get'
    }).done(data => {
      this.setState({
        user: data
      });
      console.log(data);
    }).fail(err => {
      console.error(err);
    });
  }

  render() {
    if (!this.state.user) return null;
    return (
      <li className="media">
        <Link className="pull-left" to={"/user/" + this.props.author}>
          <img className="media-object img-circle" src={this.state.user.avatar} alt="profile"></img>
        </Link>
        <div className="media-body">
          <div className="well well-lg">
              <h4 className="media-heading text-uppercase reviews">{this.state.user.username}</h4>
              <ul className="media-date text-uppercase reviews list-inline">
                <li className="dd">{this.state.date.getDate()}</li>
                <li className="mm">{this.state.date.getMonth()}</li>
                <li className="aaaa">{this.state.date.getFullYear()}</li>
              </ul>
              <p className="media-comment">
                {this.props.content}
              </p>
          </div>              
        </div>
      </li>
    );
  }
}

export default withRouter(CommentElement);