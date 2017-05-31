import React from 'react'

export const Word = ( { word, handleWord }) => {

  const handleClick = (e) => {
    handleWord(e)
  }

  return (
    <div onClick={(e) => handleClick(e)}>{word}</div>
  )

}
