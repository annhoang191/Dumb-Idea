import React, { Component } from 'react';

import Carousel from '../components/Homepage/Carousel';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Carousel headerUrl="img/headertest3.jpg"/>

        {/* intro about website. */}
          <div className="container">
            <div className="about-intro">
              <p>Dumb Idea là nơi bạn có thể đăng tải những ý tưởng thú vị nhưng lại không thể thực hiện của bản thân. Dumb Idea cũng giúp bạn tìm nguồn cảm hứng từ những ý tưởng hay ho của cộng đồng.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nunc eu semper malesuada. Vestibulum ut sodales erat. Praesent a metus non eros faucibus dapibus. Maecenas fringilla eget metus ac euismod. Suspendisse malesuada consequat viverra. Duis eros tellus, iaculis quis sapien eget, tristique elementum magna. Aliquam a ante ut ligula rhoncus consequat. Integer pharetra blandit felis, id cursus ex ullamcorper id. Proin pharetra nulla vel venenatis dapibus. Suspendisse potenti. Quisque aliquam fringilla feugiat. Nunc blandit ipsum eget elit sagittis vulputate at facilisis erat. Vivamus tellus dui, sodales ac neque id, finibus semper ligula. Donec sit amet rutrum urna, ut pulvinar odio. Proin condimentum posuere nibh et fermentum.</p>
            </div>
          </div>

          {/* intro website's goals . */}
          <div className="container">
            <div className="about-goal">
              <div className="col">
                <div className ="col-md-6">
                  <h3>Mục tiêu của chúng tôi</h3>
                  <img className="img-responsive center-block" src="img/dump3.jpg" />
                </div>
                <div className="col-md-6">
                  <br></br>
                  <br></br>
                  <br></br>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nunc eu semper malesuada. Vestibulum ut sodales erat. Praesent a metus non eros faucibus dapibus. Maecenas fringilla eget metus ac euismod. Suspendisse malesuada consequat viverra. Duis eros tellus, iaculis quis sapien eget, tristique elementum magna. Aliquam a ante ut ligula rhoncus consequat. Integer pharetra blandit felis, id cursus ex ullamcorper id. Proin pharetra nulla vel venenatis dapibus. Suspendisse potenti. Quisque aliquam fringilla feugiat. Nunc blandit ipsum eget elit sagittis vulputate at facilisis erat. Vivamus tellus dui, sodales ac neque id, finibus semper ligula. Donec sit amet rutrum urna, ut pulvinar odio. Proin condimentum posuere nibh et fermentum.</p>
                </div>
              </div>
            </div>
          </div>

          {/* website's features */}
          <div className="container">
            <div className="feature">
              <div className="col">
                <div className="col-md-6">
                  <h3>Tính năng</h3>
                  <img className="img-responsive center-block" src="img/dump2.jpg" />
                </div>
                <div className="col-md-6">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h4>Theo dõi ý tưởng</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur ad.</p>
                  <h4>Đăng tải ý tưởng</h4>
                  <p> Lorem ipsum dolor sit amet, consectetur ad.</p>
                  <h4>Mở rộng network</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur ad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* about our team. */}
          <div className="container">
            <div className="about-team">
              <h4>Chúng tôi là gì gì đó Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nunc eu semper malesuada. Vestibulum ut sodales erat. Praesent a metus non eros faucibus dapibus. Maecenas fringilla eget metus ac euismod. Suspendisse malesuada consequat viverra. Duis eros tellus, iaculis quis sapien eget, tristique elementum magna. Aliquam a ante ut ligula rhoncus consequat. Integer pharetra blandit felis, id cursus ex ullamcorper id. Proin pharetra nulla vel venenatis dapibus. Suspendisse potenti.</h4>
            </div>
          </div>
          {/* team members*/}
          <div className="container">
            <div className="row">
                 <div className="heading-title text-center">
                     <h2 className="text-uppercase">Meet the team!</h2>
                     <p>Giới thiệu gì đó team rất siêu đại loại vậy</p>
                 </div>

                 <div className="col-md-3 col-sm-3">
                     <div className="team-member">
                         <div className="team-img">
                             <img src="img/member1.jpg" alt="team member" className="img-responsive" />
                         </div>
                         <div className="team-hover">
                             <div className="desk">
                                 <h4>Angsty weeaboo</h4>
                                 <p>Giới thiệu gì đó</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/annhoang191" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Tên</h5>
                         <span>Làm cái gì đó cho project</span>
                     </div>
                 </div>
                 <div className="col-md-3 col-sm-3">
                     <div className="team-member">
                         <div className="team-img">
                             <img src="img/member2.jpg" alt="team member" className="img-responsive" />
                         </div>
                         <div className="team-hover">
                             <div className="desk">
                                 <h4>LAD</h4>
                                 <p>Giới thiệu gì đó.</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/ladpro98" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Tên</h5>
                         <span>Làm gì đó cho project</span>
                     </div>
                 </div>
                 <div className="col-md-3 col-sm-3">
                     <div className="team-member">
                         <div className="team-img">
                             <img src="img/member3.jpg" alt="team member" className="img-responsive" />
                         </div>
                         <div className="team-hover">
                             <div className="desk">
                                 <h4>Vinh Nguyễn</h4>
                                 <p>Giới thiệu gì đó</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/vinhxxu" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Tên</h5>
                         <span>Làm gì đó cho Project</span>
                     </div>
                 </div>
                 <div className="col-md-3 col-sm-3">
                     <div className="team-member">
                         <div className="team-img">
                             <img src="img/member4.jpg" alt="team member" className="img-responsive" />
                         </div>
                         <div className="team-hover">
                             <div className="desk">
                                 <h4>Nguyễn Thái Dương</h4>
                                 <p>Giới thiệu gì đó</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/Maruusha" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Tên</h5>
                         <span>Làm gì đó cho Project</span>
                     </div>
                 </div>
             </div>
          </div>
          { /*Ending */}
          <div className="container">
            <div className="ending">
              <p>Chúng tôi ủng hộ tất cả những ý tưởng thú vị nhất đến từ mọi chủ đề, kể cả những ý tưởng tưởng chừng bé nhỏ nhất bạn cũng có thể lưu lại và chia sẻ với mọi người.
              Truyền cảm hứng cho cộng đồng blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
            </div>
            <div className="notice">
              <h3 className="text-center">Ủng hộ cộng đồng ý tưởng</h3>
            </div>
            <div className="row center">
              <div className="col-md-3 col-sm-3 box-content">
                <h3 className="text-center">Chúng tôi đánh giá cao những ý tưởng sáng tạo trong mọi lĩnh vực</h3>
                 <button className="btn btn-lg btn-primary center">Xem tất cả ý tưởng</button>
              </div>
              <div className="col-md-3 col-sm-3 box-content">
                <h3 className="text-center">Đăng tải và theo dõi những ý tưởng thú vị</h3>
                 <button className="btn btn-lg btn-primary center">Đăng tải ý tưởng</button>
              </div>
              <div className="col-md-3 col-sm-3 box-content">
                <h3 className="text-center">Hợp tác liên hệ với cộng đồng sáng tạo ý tưởng</h3>
                 <button className="btn btn-lg btn-primary center">Tham gia cộng đồng</button>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default About;
