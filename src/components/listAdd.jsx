import React, { Component } from 'react';

class ListAdd extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          placeholder="입력하기"
          className="list-input"
        />
        <button className="list-add-btn btn-module">추가</button>
      </form>
    );
  }
}

export default ListAdd;
