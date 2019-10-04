import React from 'react';
import Task from './Task';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  console.log(active, done);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.lenght > 0 ? activeTasks : <p>Brak zadań, nie masz nic do roboty!</p>}
      </div>

      <hr />

      <div className="done">
        <h3>Zadania zrobione <em>({done.lenght})</em></h3>
        {done.lenght > 5 && <span style={{ fontSze: "10px" }}>wyświetlonych jest jedynie 5 ostatnich elementów</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
}

export default TaskList;