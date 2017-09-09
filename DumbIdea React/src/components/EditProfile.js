import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import $ from 'jquery';


class EditProfile extends Component {
    constructor() {
        super();
        this.form = null;
        this.state = {
          user: null
        };
      }
    
      componentDidMount() {
          $.ajax({
              url:'/api/user/' + this.props.match.params.id,
              type : 'get'
          }).done(data => {
              this.setState({
                user: data
              });
              console.log('UPDATE USER: ', data);
          }).fail(err => {
              console.error(err);
          });
      }
    
      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
    
            var img = document.getElementById("img-user");
            img.src = e.target.result;
    
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    
      sendUser = (event) => {
        event.preventDefault();
        let data = new FormData(this.form);
        $.ajax({
          url: "/api/user/" + this.props.match.params.id,
          method: 'put',
          data: data,
          contentType: false,
          processData: false,
          headers: {
            token: localStorage.token
          }
        })
        .then(
          res => {
            console.log(res);
            this.props.history.push('/user/' + this.state.user._id);
          },
          err => {
            console.log('Cannot AJAX');
          }
        );
      }

  render() {

    return (
      <div className="EditProfile">
            <div id="myModal" className="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Chỉnh sửa trang cá nhân</h4>
                    </div>
                    <div className="modal-body">
                      <form id="theform" ref={(form) => {this.form = form}} method="put">
                      <div>
                        <div>
                            <p className="label-update-user">Thông tin liên hệ</p>
                            <input form="theform" name="email-update" id="updateUserEmail" className="form-control" placeholder="Email" />
                            <br/>
                            <input form="theform" name="address-update" id="updateUserPhone" className="form-control" placeholder="Địa chỉ" />
                        </div>
                        <hr />
                        <div>
                            <p className="label-update-user">Cập nhật password: </p>
                            <input form="theform" type="password"  name="password-update" id="updateUserPassword" className="form-control" placeholder="Password" />
                        </div>
                        <hr />
                        <div>
                            <p className="label-update-user">Cập nhật ảnh đại diện</p>
                                <img id="img-user"  />
                                <input form="theform" name='image' type="file" className="select-img-avatar" onChange={this.onImageChange} />
                                </div>
                                <hr />
                                <button type="button" className="btn-add-idea btn btn-primary" onClick={this.sendUser}>Lưu thông tin</button>
                        </div>                          
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>            
      </div>
    );
  }
}

export default withRouter(EditProfile);
