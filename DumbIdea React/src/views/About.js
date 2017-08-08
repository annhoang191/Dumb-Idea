import React, { Component } from 'react';

import Carousel from '../components/Carousel';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Carousel />

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
            <div className="heading-title text-center">
                <h2 className="text-uppercase">Meet the team!</h2>
                <p>Giới thiệu gì đó team rất siêu đại loại vậy</p>
            </div>
          </div>

      </div>
    );
  }
}

export default About;
