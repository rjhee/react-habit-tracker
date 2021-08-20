import React, { Component } from 'react';

class Header extends Component {
  render() {
    const count = this.props.totalCount;
    return (
      <header>
        <span className="title-icon">
          <i className="far fa-check-square"></i>
        </span>
        <h1 className="title">체크리스트</h1>
        <span className="list-count all">{count}</span>
        <button className="delete-all btn-module" onClick={this.props.onReset}>
          모두 지우기
        </button>
      </header>
    );
  }
}

export default Header;
