import React, {Component} from 'react'

class AddNewIdea extends Component {
  render() {
    return (
      <div className="container add-new-idea">
        <div>
          <p className="add-new-idea-title">Thêm mới ý tưởng</p>
          <hr />
        </div>
        <form method="post" >
          <div>
            <div>
              <p className="label-add-idea">Tên</p>
              <textarea name="name" id="nameIdea" className="form-control" rows="2" maxlength="200" placeholder="Như “Nơi nên đi” hoặc “Món ăn nên làm.”"></textarea>
            </div>
            <hr />
            <div>
              <p className="label-add-idea">Mô tả</p>
              <textarea name="name" id="nameIdea" className="form-control" rows="4" maxlength="200" placeholder="Nội dung của bạn là gì?"></textarea>
              <hr />
            </div>
            <div>
              <p className="label-add-idea">Danh mục</p>

            </div>
            <hr />
          </div>
        </form>
      </div>

    );
  }
}

export default AddNewIdea;
