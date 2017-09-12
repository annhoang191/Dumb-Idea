import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';


class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner" role="listbox">
           <div className="item active">
             <img className="first-slide" src={this.props.headerUrl} alt="intro" />
             <div className="container">
               <div className="carousel-caption">
                 <h1>We are still working hard to make this site look cool</h1>
                 <p>We will be here soon guys. Please visit us later</p>
                 <Link to="/topIdea"><button className="btn btn-lg btn-primary">Tìm hiểu thêm</button></Link>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Carousel);
