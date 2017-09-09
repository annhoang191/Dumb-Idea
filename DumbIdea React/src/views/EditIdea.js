import React, {Component} from 'react'
import { Link , withRouter } from 'react-router-dom';

import $ from 'jquery';
import tokenfield from 'bootstrap-tokenfield';


class EditIdea extends Component {
  constructor() {
    super();
    this.form = null;
    this.state = {
      idea: null
    };
  }

  componentDidMount() {
      $.ajax({
          url:'/api/idea/' + this.props.match.params.id,
          type : 'get'
      }).done(data => {
          this.setState({
            idea: data
          });
      }).fail(err => {
          console.error(err);
      });
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {

        var img = document.getElementById("img-idea");
        img.src = e.target.result;

      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  sendIdea = (event) => {
    event.preventDefault();
    let data = new FormData(this.form);
    $.ajax({
      url: "/api/idea/" + this.props.match.params.id,
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
        this.props.history.push('/idea/' + this.props.match.params.id);
      },
      err => {
        console.log('Cannot AJAX');
      }
    );
  }

  tagChange(event) {
    let tagString = event.target.value;
    if (tagString[tagString.length-1] == " ") {
      // Split text area by " "
      var tags = tagString.split(" ");
      // Value at end index is nil so i will delete
      tags.splice(-1,1);
      // Reset value text area
      event.target.value = "";
      // Update value
      tags.map(function (val) {
        if (val[0] != "#") {
          event.target.value += "#" + val + " ";
        } else {
          event.target.value += val + " ";
        }
      });
    }
    
  }

  render() {
    if (!this.state.idea) return <div>Please wait</div>;

    return (
      <div className="container add-new-idea">
        <div>
          <p className="add-new-idea-title">Chỉnh sửa ý tưởng</p>
          <hr />
        </div>
        <form id="theform" ref={(form) => {this.form = form}} method="post">
          <div>
            <div className="add-idea">
              <p>Tên</p>
              <textarea form="theform" name="name" className="form-control" rows="2" maxLength="200" placeholder="Như “Nơi nên đi” hoặc “Món ăn nên làm.”" defaultValue={this.state.idea.name}></textarea>
              <hr />
            </div>
            <div className="add-idea">
              <p>Mô tả</p>
              <textarea form="theform" name="description" className="form-control" rows="4" maxLength="200" placeholder="Nội dung của bạn là gì?" defaultValue={this.state.idea.description}></textarea>
              <hr />
            </div>
            <div className="add-idea">
              <p>Thêm thẻ</p>
              <textarea form="theform" name="tags" className="form-control" rows="2" maxLength="200" placeholder="Điền tags tại đây" onChange={this.tagChange} defaultValue={this.state.idea.tags}></textarea>
              <hr />
            </div>
            <div className="add-idea">
              <p>Thêm ảnh</p>
              <img id="img-idea" alt="A close up of an idea" src={this.state.idea.photo}/>
              <input form="theform" name='image' type="file" className="select-img-idea" onChange={this.onImageChange} />
              <hr />
            </div>
            <button type="button" className="btn-add-idea btn btn-primary" onClick={this.sendIdea}>Gửi</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditIdea);
