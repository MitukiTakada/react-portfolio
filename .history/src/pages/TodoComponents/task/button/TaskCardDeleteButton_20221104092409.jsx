
import React from 'react'
import {SmallCloseIcon} from "@chakra-ui/icons"


const TaskCardDeleteButton = ({ taskCards, setTaskCards }) => {
  const deleteCard = (id) => {
    const deletedCards = taskCards.filter((taskCard) => {
      taskCard.id !== 
    })
  }
  return (
    <div>
      <button onClick={deleteCard}>
        <SmallCloseIcon w={5} h={5} />
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
