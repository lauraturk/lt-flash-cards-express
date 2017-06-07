import React from 'react'

export const CardBack = (props) => {
  const { currentCard, cardControl, showMore } = props

  const showDefinitions = () => {

    // const defArray = currentCard.backCard.definitions.map((def, index) => {
    //   return (<div key={index}>{def}</div>)
    // })
    //
    // if(!cardControl.showMore){
    //   return defArray.filter((def, index) => {
    //   index = 1
    //   })
    // }
  }

  const showMoreButton = !cardControl.showMore ? 'SHOW MORE' : 'SHOW LESS'

  const whichCard = () => {
    if(!currentCard.backCard.definitions) {
      return (
        <div>{currentCard.backCard}</div>
      )
    } else {
      return (
        <div>
          <div>{currentCard.backCard.name}</div>
          {showDefinitions()}
          <p onClick={() => showMore()}>{showMoreButton}</p>
        </div>
      )
    }
  }

  return (
    <article>
      {whichCard()}
    </article>
  )

}
