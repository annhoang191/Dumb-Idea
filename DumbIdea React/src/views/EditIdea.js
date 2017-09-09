import React, {Component} from 'react'
import { Link , withRouter } from 'react-router-dom';

import $ from 'jquery';

class EditIdea extends Component {
  // constructor() {
  //   super();
  //   this.form = null;
  // }
  //
  // onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();
  //     reader.onload = (e) => {
  //
  //       var img = document.getElementById("img-idea");
  //       img.src = e.target.result;
  //
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }
  //
  // sendIdea = (event) => {
  //   event.preventDefault();
  //   let data = new FormData(this.form);
  //   $.ajax({
  //     url: "/api/idea/",
  //     method: 'put',
  //     data: data,
  //     contentType: false,
  //     processData: false,
  //     headers: {
  //       token: localStorage.token
  //     }
  //   })
  //   .then(
  //     res => {
  //       console.log(res);
  //       this.props.history.push('/idea/' + res.id);
  //     },
  //     err => {
  //       console.log('Cannot AJAX');
  //     }
  //   );
  // }

  render() {
    return (
      <div className="container add-new-idea">
        <div>
          <p className="add-new-idea-title">Chỉnh sửa ý tưởng</p>
          <hr />
        </div>
        <form id="theform" ref={(form) => {this.form = form}} method="post">
          <div>
            <div>
              <p className="label-add-idea">Tên</p>
              <textarea form="theform" name="name" id="nameIdea" className="form-control" rows="2" maxLength="200" placeholder="Như “Nơi nên đi” hoặc “Món ăn nên làm.”">this.props.idea.name</textarea>
            </div>
            <hr />
            <div>
              <p className="label-add-idea">Mô tả</p>
              <textarea form="theform" name="description" id="nameIdea" className="form-control" rows="4" maxLength="200" placeholder="Nội dung của bạn là gì?">this.props.description</textarea>
            </div>
            <hr />
            <div>
              <p className="label-add-idea">Danh mục</p>
              <div>
                <div className="arrow-bottom glyphicon glyphicon-triangle-bottom"></div>
                <select>
                  <option value="">Nó là loại ý tưởng gì?</option>
                  <option value="technology">Công nghệ</option>
                  <option value="business">Kinh doanh - Thương mại</option>
                  <option value="art">Nghệ thuật</option>
                  <option value="application">Ứng dụng - Đồ chơi</option>
                  <option value="society">Hoạt động xã hội</option>
                  <option value="bullshit">Nhảm nhí</option>
                </select>
              </div>
            </div>
            <hr />
            <div>
              <p className="label-add-idea">Thêm ảnh</p>
              <img id="img-idea" alt="A close up of an idea" />
              <input form="theform" name='image' type="file" className="select-img-idea" onChange={this.onImageChange} />
            </div>
            <hr />
            <button type="button" className="btn-add-idea btn btn-primary" onClick={this.sendIdea}>Gửi</button>
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(EditIdea);
