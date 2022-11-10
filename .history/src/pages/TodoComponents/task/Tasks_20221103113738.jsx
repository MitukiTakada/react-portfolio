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
            <div>

            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
