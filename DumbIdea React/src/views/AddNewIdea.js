import React, {Component} from 'react'

class AddNewIdea extends Component {
  render() {
    return (
      <div className="container add-new-idea">
            <form method="post" >
              <div>
                <p className="add-new-idea-title">Thêm mới ý tưởng</p>
                <hr className="line-break" />
              </div>
              <div>
                <div>
                  <div>
                    <p className="label-add-idea">Tên</p>
                    <textarea name="name" id="nameIdea" className="form-control" rows="2" maxlength="200" placeholder="Như “Nơi nên đi” hoặc “Món ăn nên làm.”"></textarea>
                  </div>
                  <hr className="line-break" />
                </div>
                <div>
                  <div>
                    <p className="label-add-idea">Mô tả</p>
                    <textarea name="name" id="nameIdea" className="form-control" rows="4" maxlength="200" placeholder="Nội dung của bạn là gì?"></textarea>
                  </div>
                  <hr className="line-break" />
                </div>
                <div>
                  <div>
                    <p className="label-add-idea">Danh mục</p>

                  </div>
                  <hr className="line-break" />
                </div>
              </div>
            </form>
      </div>

    );
  }
}

export default AddNewIdea;
