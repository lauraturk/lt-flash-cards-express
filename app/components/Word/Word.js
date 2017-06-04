import React from 'react'

export const Word = ( { word, handleWord }) => {

  const handleClick = (e) => {
    handleWord(e)
  }

  return (
    <div className="word" onClick={(e) => handleClick(e)}>{word}</div>
  )

}
