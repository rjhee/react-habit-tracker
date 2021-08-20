import React, { Component } from 'react';
import Header from './components/header';
import './app.css';
import CheckLists from './components/checkLists';
import ListAdd from './components/listAdd';

class App extends Component {
  state = {
    lists: [
      { id: 0, name: '운동하기', count: 0 },
      { id: 1, name: '공부하기', count: 0 },
      { id: 2, name: '영상보기', count: 0 },
      { id: 3, name: '코딩하기', count: 0 },
    ],
  };
  handlePlus = (list) => {
    const lists = [...this.state.lists];
    const index = lists.indexOf(list);
    lists[index].count++;
    this.setState({ lists });
  };

  handleMinus = (list) => {
    const lists = [...this.state.lists];
    const index = lists.indexOf(list);
    list.count > 0 && lists[index].count--;
    this.setState({ lists });
  };

  handleDelete = (list) => {
    const lists = [...this.state.lists];
    const index = lists.indexOf(list);
    lists.splice(index, 1);
    this.setState({ lists });
  };

  handleAdd = (name) => {
    const lists = [...this.state.lists, { id: Date.now(), name, count: 0 }];
    this.setState({ lists });
  };

  handleReset = () => {
    const lists = this.state.lists.map((list) => {
      list.count = 0;
      return list;
    });
    this.setState({ lists });
  };
  render() {
    return (
      <div className="content">
        <Header
          totalCount={
            this.state.lists.filter((count) => count.count > 0).length
          }
          onReset={this.handleReset}
        />
        <CheckLists
          list={this.state.lists}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
          onDelete={this.handleDelete}
        />
        <ListAdd onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
