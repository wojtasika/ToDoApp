import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">To Do App
        <AddTask />
        <TaskList />
      </div>
    )
  }
}

export default App;
