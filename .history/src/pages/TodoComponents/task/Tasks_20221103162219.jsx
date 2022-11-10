import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task) => {
                return (
                  <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks}/>
                )
              })}
              {provided.}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
