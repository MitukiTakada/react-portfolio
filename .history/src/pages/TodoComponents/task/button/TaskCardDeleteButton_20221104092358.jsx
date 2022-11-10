
import React from 'react'
import {SmallCloseIcon} from "@chakra-ui/icons"


const TaskCardDeleteButton = ({ taskCards, setTaskCards }) => {
  const deleteCard = () => {
    const deletedCards = taskCards.filter((taskCard) => {
      
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
