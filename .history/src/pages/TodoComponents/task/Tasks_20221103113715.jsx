import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(pro)}
          {tasks.map((task) => {
            return (
              <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
            )
          })}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
