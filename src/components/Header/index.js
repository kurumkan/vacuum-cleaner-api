import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import LogoImg from 'images/logo.jpg';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      term: '',
      inputFocused: false
    };
    this.toggleSearchbar = this.toggleSearchbar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleSearchbar(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  handleFocus(e) {
    this.setState({
      inputFocused: !this.state.inputFocused
    });
    console.log('handleFocus')
  }
  handleSubmit(e) {
    e.preventDefault();
    const { term } = this.state;

    alert(term);

    this.setState({
      term: ''
    });
  }
  render() {
    return (
      <nav className={`Header ${this.state.isOpen && 'open'}`}>
        <div className="logo">
          <Link to="/"><img src={LogoImg} alt="Logo" /></Link>
        </div>
        <div className="search-btn-wrapper">
          <span className="btn search-btn" onClick={this.toggleSearchbar}>
            <FontAwesome name="search" />
          </span>
        </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-container">
            <FontAwesome name="search" className="left icon"/>
            <input
              type="search"
              name="top-search"
              placeholder="Search"
              value={this.state.term}
              results={3}
              onChange={this.handleChange}
              onBlur={this.handleFocus}
              onFocus={this.handleFocus}
              autoComplete="off"
            />
            <div className={`search-dropdown ${this.state.inputFocused && 'open'}`}>
              <div className="search-title">Recent searches</div>
              <ul>
                <li><a href="http://google.com">books</a></li>
                <li><a href="http://google.com">concert wide</a></li>
                <li><a href="http://google.com">watches</a></li>
                <li><a href="http://google.com">iphone</a></li>
                <li><a href="http://google.com">jacket</a></li>
                <li><a href="http://google.com">short pants</a></li>
                <li><a href="http://google.com">sun glusses</a></li>
                <li><a href="http://google.com">hello kitty</a></li>
              </ul>
            </div>
          </div>
        </form>
        <div className="home-btn-wrapper">
          <Link to="/" className="btn home-btn">
            <FontAwesome name="plus" className="right icon" />
          </Link>
        </div>
        <div className="profile-btn-wrapper">
          <Link to="#" className="btn profile-btn">
            <FontAwesome name="user" className="icon rounded" />
            <span className="username">ARTURARTUR</span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;