import React, { Component } from 'react';

var Rating = React.createClass({
    getInitialState() {
      console.log("initial", this.props.rating);
      return {
        rating: this.props.rating || null,
        temp_rating: null
      };
    },
    componentWillReceiveProps(nextProps) {
      console.log("update", nextProps.rating);
      {
        
        this.setState({
          rating: nextProps.rating,
          temp_rating: null
        });
      }
    },
    rate(rating) {
      if (this.props.static) return;
      this.props.callback(rating);
      this.setState({
        rating: rating,
        temp_rating: rating
      });
    },
    star_over(rating) {
      if (this.props.static) return;
      this.state.temp_rating = this.state.rating;
      this.state.rating = rating;
      
      this.setState({
        rating: this.state.rating,
        temp_rating: this.state.temp_rating
      });
    },
    star_out() {
      if (this.props.static) return;
      this.state.rating = this.state.temp_rating;
      
      this.setState({ rating: this.state.rating });
    },
    render() {
      console.log("render", this.state.rating);
      var stars = [];
      
      for(var i = 1; i <= 10; i++) {
        var klass = 'star-rating__star';
        
        if (this.state.rating >= i && this.state.rating != null) {
          klass += ' is-selected';
        }
  
        stars.push(
          <label key={i}
            className={klass}
            onClick={this.rate.bind(this, i)}
            onMouseOver={this.star_over.bind(this, i)}
            onMouseOut={this.star_out}>
            ★
          </label>
        );
      }
      
      return (
        <div className="star-rating">
          <span>{this.props.label}</span>
          {stars}
        </div>
      );
    }
  });

export default Rating;