import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }
  
  onVideoSearch(searchTerm) {
    this.setState({
      searchTerm
    });
    if (!this.state.searchTerm) return;
    this.props.updateSearchTerm(this.state.searchTerm);
  }

  render() {
    return (
      <div className="col-sm-12 mt-3 p-3">
        <div className="form">
          <div className="form-group row">
            <div className="col-sm-10">
              <input className="form-control" 
                value={ this.state.searchTerm }
                onChange={ event => this.onVideoSearch(event.target.value) }
                placeholder="Search Youtube Video"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

}
