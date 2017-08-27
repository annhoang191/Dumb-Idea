import React, {Component} from 'react'

class AddNewIdea extends Component {
  render() {
    return (
      <div className="container add-new-idea">
        <div>
          <p className="add-new-idea-title">Thêm mới ý tưởng</p>
          <hr />
        </div>
        <form method="post" enctype='multipart/form-data'>
          <div>
            <div>
              <p className="label-add-idea">Tên</p>
              <textarea name="name" id="nameIdea" className="form-control" rows="2" maxlength="200" placeholder="Như “Nơi nên đi” hoặc “Món ăn nên làm.”"></textarea>
            </div>
            <hr />
            <div>
              <p className="label-add-idea">Mô tả</p>
              <textarea name="name" id="nameIdea" className="form-control" rows="4" maxlength="200" placeholder="Nội dung của bạn là gì?"></textarea>
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
              Chọn ảnh: <input type="file" />
            </div>
            <hr />
          </div>
        </form>
      </div>

    );
  }
}

export default AddNewIdea;
