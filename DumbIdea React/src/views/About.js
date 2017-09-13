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
              <p>Dumb Ideas là một website giúp bạn có thể tìm kiếm nguồn cảm hứng cho ý tưởng của mình từ cộng đồng. Tại đây bạn có thể theo dõi, lưu lại những ý tưởng phi lợi nhuận mà mọi người đăng tải. Từ những ý tưởng có khả năng thay đổi cuộc sống cho tới những ý tưởng nho nhỏ, bạn đều có thể đăng tải và tìm kiếm tại đây. Những ý tưởng có thể đến từ bất kì đâu, trong mọi lĩnh vực. Dumb Ideas sẽ giúp bạn lưu trữ, tìm người phát triển ý tưởng thành sản phẩm cùng bạn</p>
            </div>
          </div>

          {/* intro website's goals . */}
          <div className="container">
            <div className="about-goal">
              <div className="col">
                <div className ="col-md-6">
                  <h3>Mục tiêu của chúng tôi</h3>
                  <img className="img-responsive center-block" src="img/dump5.jpg" />
                </div>
                <div className="col-md-6">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>             
                  <h5>Dumb Ideas sẽ giúp bạn đưa những ý tưởng, dù có nhỏ bé đến đâu, đến với cộng đồng. Đây cũng là nơi bạn có thể tìm kiếm nguồn cảm hứng cho những ý tưởng mới mẻ của mình, tham gia phát triển những ý tưởng thú vị khác và mở rộng các mối quan hệ.</h5>
                  <h5>Tất cả những ý tưởng được đăng tải trên Dumb Ideas đều mang tính chia sẻ cộng đồng, phi lợi nhuận cho đến khi ý tưởng được phát triển theo hướng của tác giả.</h5>
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
                  <img className="img-responsive center-block" src="img/dump4.jpg" />
                </div>
                <div className="col-md-6">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h4>Theo dõi ý tưởng</h4>
                  <p>Hứng thú với một ý tưởng? Hãy lưu lại ý tưởng đó bằng cách tạo tài khoản trên Dumb Ideas.</p>
                  <h4>Đăng tải ý tưởng</h4>
                  <p>Bạn có ý tưởng nhưng không thể thực hiện một mình? Bạn muốn chia sẻ một ý tưởng nhỏ nhỏ với cộng đồng? Hãy đăng tải chúng trên Dumb Ideas</p>
                  <h4>Mở rộng network</h4>
                  <p>Bạn có thể liên hệ với tác giả của những ý tưởng thú vị để tham gia đóng góp phát triển.</p>
                </div>
              </div>
            </div>
          </div>

          {/* about our team. */}
          <div className="container">
            <div className="about-team">
              <h4>Team gồm 4 thành viên là sinh viên đến từ các trường khác nhau nhưng cùng tham gia phát triển Dumb Ideas trong thời gian học tại Techkids</h4>
            </div>
          </div>
          {/* team members*/}
          <div className="container">
            <div className="row">
                 <div className="heading-title text-center">
                     <h2 className="text-uppercase">Meet the team!</h2>
                     <p>Các thành viên trong team</p>
                 </div>

                 <div className="col-md-3 col-sm-3">
                     <div className="team-member">
                         <div className="team-img">
                             <img src="img/member1.jpg" alt="team member" className="img-responsive" />
                         </div>
                         <div className="team-hover">
                             <div className="desk">
                                 <h4>Hoàng Quỳnh Anh</h4>
                                 <p>Code lâu bâu</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/annhoang191" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Hoàng Quỳnh Anh</h5>
                         <span>Front-End Dev - Lâu bâu</span>
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
                                 <p>Code gánh team</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/ladpro98" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Lê Anh Đức</h5>
                         <span>Backend - Frontend</span>
                     </div>
                 </div>
                 <div className="col-md-3 col-sm-3">
                     <div className="team-member">
                         <div className="team-img">
                             <img src="img/member3.jpg" alt="team member" className="img-responsive" />
                         </div>
                         <div className="team-hover">
                             <div className="desk">
                                 <h4>Nguyễn Đình Vinh</h4>
                                 <p>Code gánh team 2</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/vinhxxu" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Nguyễn Đình Vinh</h5>
                         <span>Backend Dev</span>
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
                                 <p>Code gì đó</p>
                             </div>
                             <div className="s-link">
                                 <a href="https://www.facebook.com/Maruusha" target="_blank"><i className="fa fa-facebook"></i></a>
                                 <a href="#"><i className="fa fa-twitter"></i></a>
                                 <a href="#"><i className="fa fa-google-plus"></i></a>
                             </div>
                         </div>
                     </div>
                     <div className="team-title">
                         <h5>Nguyễn Thái Dương</h5>
                         <span>Cổ vũ team</span>
                     </div>
                 </div>
             </div>
          </div>
          { /*Ending */}
          <div className="container">
            <div className="ending">
              <h2>Hãy chia sẻ ý tưởng của bạn với chúng tôi</h2>
            </div>

          </div>

      </div>
    );
  }
}

export default About;
