import React, { Component } from 'react';

class ListBox extends Component {
  render() {
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
                  <article className="post style-3">
                      <div className="media">
                        <div className="media-left pull-left visible-lg visible-md">
                          <img className="img-responsive media-object" src="img/dump2.jpg" />
                        </div>
                        <div className="media-body">
                          <h6 className="entry-title"><a href="#">Ý tưởng gì đó</a></h6>
                            <div className="entry-author"><span className="text-muted">Tác giả</span>
                              <a href="#">Ai đó</a>
                              <button className="btn btn-sm btn-default btn-detail">Chi tiết</button>
                            </div>
                            <p>Mô tả ngắn gọn Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này</p>
                            <div className="idea-footer">
                              <div className="rating"><i className="fa fa-star"></i> Độ khả thi (người dùng tự đánh giá): </div>
                                <div className="rating"><i className="fa fa-star-o"></i> Độ khả thi (tính trung bình): </div>
                                <div className="follower"><i className="fa fa-user-circle-o"></i> Số người theo dõi:</div>
                                <div className="likes"><i className="fa fa-comment"></i> Số lượt đánh giá: </div>
                            </div>
                        </div>
                      </div>
                  </article>
                  <hr />
                  <article className="post style-3">
                    <div className="media">
                      <div className="media-left pull-left visible-lg visible-md">
                        <img className="img-responsive media-object" src="img/dump2.jpg" />
                      </div>
                      <div className="media-body">
                        <h6 className="entry-title"><a href="#">Ý tưởng gì đó</a></h6>
                        <div className="entry-author"><span className="text-muted">Tác giả</span>
                          <a href="#">Ai đó</a>
                          <button className="btn btn-sm btn-default btn-detail">Chi tiết</button>
                        </div>
                        <p>Mô tả ngắn gọn Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này</p>
                        <div className="idea-footer">
                          <div className="rating"><i className="fa fa-star"></i> Độ khả thi (người dùng tự đánh giá): </div>
                          <div className="rating"><i className="fa fa-star-o"></i> Độ khả thi (tính trung bình): </div>
                          <div className="follower"><i className="fa fa-user-circle-o"></i> Số người theo dõi:</div>
                          <div className="likes"><i className="fa fa-comment"></i> Số lượt đánh giá: </div>                                </div>
                      </div>
                    </div>
                  </article>
                  <hr />
                  <article className="post style-3">
                    <div className="media">
                      <div className="media-left pull-left visible-lg visible-md">
                        <img className="img-responsive media-object" src="img/dump2.jpg" />
                      </div>
                      <div className="media-body">
                        <h6 className="entry-title"><a href="#">Ý tưởng gì đó</a></h6>
                        <div className="entry-author"><span className="text-muted">Tác giả</span>
                          <a href="#">Ai đó</a>
                          <button className="btn btn-sm btn-default btn-detail">Chi tiết</button>
                        </div>
                        <p>Mô tả ngắn gọn Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này Lorem ipsum đoạn này</p>
                        <div className="idea-footer">
                          <div className="rating"><i className="fa fa-star"></i> Độ khả thi (người dùng tự đánh giá): </div>
                          <div className="rating"><i className="fa fa-star-o"></i> Độ khả thi (tính trung bình): </div>
                          <div className="follower"><i className="fa fa-user-circle-o"></i> Số người theo dõi:</div>
                          <div className="likes"><i className="fa fa-comment"></i> Số lượt đánh giá: </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <hr />
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
