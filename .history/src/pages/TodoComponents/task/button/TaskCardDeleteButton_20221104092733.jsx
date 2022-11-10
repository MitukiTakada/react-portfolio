
import React from 'react'
import {SmallCloseIcon} from "@chakra-ui/icons"


const TaskCardDeleteButton = ({ taskCards, setTaskCards, taskCard }) => {
  const deleteCard = (id) => {
    const deletedCards = taskCards.filter((taskCard) => {
      return taskCard.id !== id;
    })
  }
  return (
    <div>
      <button onClick={() => deleteCard(taskCard.id)}>
        <SmallCloseIcon w={5} h={5} />
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
