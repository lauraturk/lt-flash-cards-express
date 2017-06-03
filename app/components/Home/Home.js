import React from 'react'
import * as icon from '../../assets/svg-icons'

export const Home = () => {
  return (
    <section className="welcome-msg">
      <ul>
        <li>Step 1: Choose A Language to Learn {icon.gearIcon}</li>
        <li>Step 1: Get Started Searching for Words {icon.searchIcon}</li>
        <li>Step 2: Found a good one? Add it to an existing deck or create a new deck {icon.cardIcon}</li>
        <li>Step 3: Click a deck to practice your new found words</li>
      </ul>
    </section>
  )
}
