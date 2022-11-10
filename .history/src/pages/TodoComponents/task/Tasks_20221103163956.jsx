import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  const handleD
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task) => {
                return (
                  <div key={task.id}>
                    <Task task={task}  tasks={tasks} setTasks={setTasks}/>
                  </div>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
