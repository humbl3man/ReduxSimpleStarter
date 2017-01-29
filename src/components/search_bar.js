import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  
  onSubmitHandler(event) {
    event.preventDefault();
    if (!this.state.searchTerm) return;
    this.props.getSearchTerm(this.state.searchTerm);
    
  }

  render() {
    return (
      <div className="col-sm-12 mt-3 p-3">
        <form className="form" onSubmit={this.onSubmitHandler}>
          <div className="form-group row">
            <div className="col-sm-10">
              <input className="form-control" 
                value={ this.state.searchTerm }
                onChange={ event => this.setState({ searchTerm: event.target.value }) }
                placeholder="Search Youtube Video"
              />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  };

}
