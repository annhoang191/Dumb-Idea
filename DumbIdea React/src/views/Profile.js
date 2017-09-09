import React, { Component } from 'react';
import $ from 'jquery';

import IdeaBoxProfile from '../components/IdeaBoxProfile';
import EditProfile from '../components/EditProfile';


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user : null,
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/user/' + this.props.match.params.id,
      type: 'get'
    }).done((userInfo) => {
      this.setState({
        user : userInfo,
      });
      console.log(userInfo);
    }).fail(err => {
      console.log(err);
    }) 
  }

  render() {
    if(!this.state.user) return <div>Get out!</div>;

    let EditProfileButton = () => {
      if (localStorage.userId == this.state.user._id) {
        return (
          <div>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Edit Profile</button>
            <EditProfile />
          </div>
        );
      } else {
        return <div></div>
      }
    }

    return (
      <div className="Profile row">
        <div className="clearfix well profile-header">
          <div className="col-md-2">
            <img  className="img-thumbnail-profile" src={this.state.user.avatar}/>
          </div>

        <div className="col-md-8">
            <blockquote>
              <p>{this.state.user.username}</p>
            </blockquote>
            <ul className="contact">
              <li><i className="fa fa-phone"></i> Address: {this.state.user.address}</li>
              <li><i className="fa fa-envelope"></i> Mail: {this.state.user.email}</li>
            </ul>
        </div>
          <div className="col-md-2">
            <EditProfileButton />
          </div>
         
        </div>
        
        <div className="container">
          <div className="content">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#created"><i className="fa fa-check-square"></i> Ý tưởng đã tạo</a></li>
                <li><a data-toggle="tab" href="#following"><i className="fa fa-eye"></i> Ý tưởng đang theo dõi</a></li>
              </ul>            
          </div>
        </div>

          <div className="tab-content">
            <div id="created" className="created-idea tab-pane fade in active">
              <ul className="media-list">
                {this.state.user.createdIdeas.map((id, index) => (
                  <IdeaBoxProfile key={index} id={id} />
                ))}
              </ul>
          </div>

          <div id="following" className="following-idea tab-pane fade in">
              <ul className="media-list">
                  {this.state.user.followedIdeas.map((id, index) => (
                    <IdeaBoxProfile key={index} id={id} />
                  ))}
                </ul>              
           </div>

        </div>
      </div>
    );
  }
}

export default Profile;
