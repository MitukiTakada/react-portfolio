import React from 'react'
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {tasks, setTasks} = props;
  
  return (
    <div>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => {
                return (
                  <div key={task.id}>
                    <Task task={task} index={index} tasks={tasks} setTasks={setTasks}/>
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
