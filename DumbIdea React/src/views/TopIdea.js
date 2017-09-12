import React, { Component } from 'react';
import $ from 'jquery';

// import MostPopularIdea from '../components/MostPopularIdea';
import FilterBox from '../components/FilterBox';
import ListBox from '../components/ListBox';
class TopIdea extends Component {
  constructor() {
    super();

    this.state = {
      ideasDisplay : [],
      pageNo       : 1,
      isLoading    : false,
      categories : ['technology', 'business', 'art', 'application', 'social', 'other'],
      searchText : ""
    }
  }

  componentDidMount() {
    this.requestNextPage();
    $(window).on('scroll', this.checkScroll.bind(this));
  }

  checkScroll() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
      if(!this.state.isLoading) this.requestNextPage();
    }
  }

  reload = () => {
    this.setState({
      ideasDisplay: [],
      pageNo: 1,
      isLoading: false
    }, this.requestNextPage);
  }

  setFilter = (category, state) => {
    if (!state && this.state.categories.includes(category)) {
      this.setState({
        categories: this.state.categories.filter(e => e != category)
      }, this.reload);
    } else if (state) {
      this.setState({
        categories: this.state.categories.concat(category)
      }, this.reload);
    }
  }

  setSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  invokeSearch = (e) => {
    if (e.keyCode == 13) {
      this.reload();
    }
  }

  requestNextPage() {
    // Set Is loading true
    this.setState({
      isLoading : true
    })
    // Query
    $.ajax({
      url  : '/api/idea/getAllFull/' + this.state.pageNo,
      type : 'get',
      data : {
        categories: this.state.categories,
        searchText: this.state.searchText
      }
    }).done( data => {
      console.log('Data in list box: ' + data);
      // Update list idea and page number
      this.setState({
        ideasDisplay  : this.state.ideasDisplay.concat(data),
        pageNo        : this.state.pageNo + 1
      })
    }).fail( err => {
      // Error
      console.log('ERROR in ajax List Box: ' + err);
    }).always( () => {
      // Set Is loading true
      this.setState({
        isLoading : false
      })
    })
  }

  render() {
    console.log(this.state.categories);
    return (
      <div className="TopIdea">
        <section className="top-section">
          <div className="container">
            <h2 className="top-header text-center">Những ý tưởng được đánh giá cao nhất trong tuần</h2>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ListBox ideasDisplay={this.state.ideasDisplay} />
            </div>
            <div className="col-md-4">
              <FilterBox setFilter={this.setFilter}/>
              <input type="text" className="form-control" placeholder="Search" value={this.state.searchText} onInput={this.setSearchText} onKeyDown={this.invokeSearch} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TopIdea;
