import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  const handleDragEnd = (result) => {
    const remove= tasks.splice(result.source.index, 1)
    tasks.splice(result.destination.index, 0, remove[0])
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => {
                return (
                  <div key={task.id}>
                    <Task task={task} index={} tasks={tasks} setTasks={setTasks}/>
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
