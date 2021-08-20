import React, { Component } from 'react';
import CheckList from './checkList';

class CheckLists extends Component {
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
    return (
      <ul className="list-box">
        {this.props.list.map((list) => (
          <CheckList
            key={list.id}
            list={list}
            onPlus={this.props.onPlus}
            onMinus={this.props.onMinus}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}
export default CheckLists;
