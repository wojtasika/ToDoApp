import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać w coś tam',
        date: '2019-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'zrobić dobry uczynek',
        date: '2020-11-12',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'wyprowadzić psa',
        date: '2019-12-12',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'zrób zakupy',
        date: '2019-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'zrób zakupy',
        date: '2019-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'zrób zakupy',
        date: '2039-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'zrób zakupy',
        date: '2049-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: 'zrób zakupy',
        date: '2019-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: 'zrób zakupy',
        date: '2029-12-31',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    // pierwszy sposób:

    // const tasks = [...this.state.tasks];

    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks
    // })

    // drugi sposób:

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })

  }
  changeTaskSatus = (id) => {

    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete=
          {this.deleteTask} change={this.changeTaskSatus} />
      </div>
    )
  }
}

export default App;
