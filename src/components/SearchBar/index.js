import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: '',
    inStock: true,
  };
  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.searchQuery(this.state.search);
  };
  handleCheckbox = () => {
    this.setState({
      inStock: !this.state.inStock,
    });
  };
  render() {
    return (
      <div className="columns is-flex is-justify-content-center">
        <form className="column is-half">
          <label htmlFor="name">Search</label>
          <input
            className="input"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="inStock"
            checked={this.state.inStock}
            value={this.state.inStock}
            onChange={this.handleCheckbox}
          />
          <label htmlFor="inStock">Only show products in stock</label>
        </form>
      </div>
    );
  }
}
export default SearchBar;
