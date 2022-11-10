import React from 'react'
import Task from './Task';
import { DragDropContext } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      <DragDropContext>
      {tasks.map((task) => {
        return (
          <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
        )
      })}
      </DragDropContext>
    </div>
  )
}

export default Tasks
