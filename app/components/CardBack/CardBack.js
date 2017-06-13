import React from 'react'

export const CardBack = (props) => {
  const { currentCard, cardControl, showMore } = props



    const arrayFilter = () => {
      const definitions = currentCard.backCard.definitions

      let cardShowMore = cardControl.showMore
      if(!cardShowMore) {
        return (
          <div className="definition-info">
            {definitions[0]}
          </div>
        )
      } else {
        return (
          <div className="definition-info">
            {definitions.map((def, index) => {
              return <div className="single-def" key={index}>{def}</div>
            })}
          </div>
        )
      }

    }


  const showMoreButton = !cardControl.showMore ? 'SHOW MORE' : 'SHOW LESS'

  const whichCard = () => {
    if(!currentCard.backCard.definitions) {
      return (
        <div className="answer-info">{currentCard.backCard}</div>
      )
    } else {
      return (
        <div className="scroll-info">
          <div className="answer-info">{currentCard.backCard.name}</div>
          {arrayFilter()}
          <p className="show-more-button" onClick={() => showMore()}>{showMoreButton}</p>
        </div>
      )
    }
  }

  return (
    <article className="card-answer-info">
      {whichCard()}
    </article>
  )

}
