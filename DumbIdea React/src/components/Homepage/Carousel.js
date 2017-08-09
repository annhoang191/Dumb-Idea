import React, { Component } from 'react';


class Carousel extends Component {
  render() {
    return (
      <div classNameName="Carousel">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner" role="listbox">
           <div className="item active">
             <img className="first-slide" src='img/headertest3.jpg' alt="intro" />
             <div className="container">
               <div className="carousel-caption">
                 <h1>We are still working hard to make this site look cool</h1>
                 <p>We will be here soon guys. Please visit us later</p>
                 <p><a className="btn btn-lg btn-primary" href="#" role="button">Tìm hiểu thêm</a></p>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
