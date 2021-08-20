import React, { Component } from 'react';

class CheckList extends Component {
  handlePlus = () => {
    this.props.onPlus(this.props.list);
  };
  handleMinus = () => {
    this.props.onMinus(this.props.list);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.list);
  };

  render() {
    const { name, count } = this.props.list;

    return (
      <li className="list">
        <span className="list-name">{name}</span>
        <span className="list-count">{count}</span>
        <button className="btn count-plus" onClick={this.handlePlus}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="btn count-minus" onClick={this.handleMinus}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="btn list-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default CheckList;
