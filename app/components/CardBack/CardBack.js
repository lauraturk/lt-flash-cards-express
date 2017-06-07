import React from 'react'

export const CardBack = (props) => {
  const { currentCard, cardControl, showMore } = props



    const arrayFilter = () => {
      const definitions = currentCard.backCard.definitions

      let cardShowMore = cardControl.showMore
      if(!cardShowMore) {
        return (
          <div>
            {definitions[0]}
          </div>
        )
      } else {
        return (
          <div>
            {definitions.map((def, index) => {
              return <div key={index}>{def}</div>
            })}
          </div>
        )
      }

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
          {arrayFilter()}
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
