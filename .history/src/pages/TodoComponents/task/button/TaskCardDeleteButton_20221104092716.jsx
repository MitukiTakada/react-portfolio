
import React from 'react'
import {SmallCloseIcon} from "@chakra-ui/icons"


const TaskCardDeleteButton = ({ taskCards, setTaskCards, tas }) => {
  const deleteCard = (id) => {
    const deletedCards = taskCards.filter((taskCard) => {
      taskCard.id !== id;
    })
  }
  return (
    <div>
      <button onClick={() => deleteCard()}>
        <SmallCloseIcon w={5} h={5} />
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
