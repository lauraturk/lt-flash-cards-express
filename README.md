## Flash Lingua:
#### A Travel/Language Learning app that allows you to search for translations by photo or text in any language, and monolingual definitions (Spanish only). Translation in hand, save the words you want to practice in flashcard decks tailored to you!

## Project Status
This project is currently in development. Currently this is the working functionality, next steps include building a server to store user profiles, optimizing for mobile and mobile cameras, adding additional UI for the flashcard practice.

## Project Screen Shot(s)   

![MVP Functionality](http://g.recordit.co/6vwMJHJv81.gif)

## Installation and Setup Instructions

`git clone, npm install, npm start`

To run locally, you'll need to obtain your own developer keys:

1. An [Oxford Dictionaries][oed] key

2. Set up your [Google Cloud Platform][google] and then enable the Translation and Vision APIs.

3. `cp example.env .env` and then copy the appropriate values to `.env`.

[oed]: https://developer.oxforddictionaries.com/documentation
[google]: https://cloud.google.com/translate/docs/getting-started

## Reflection

  This was a 2 week long personal project for Turing School of Software and Design.

  I set out to build an app that I had wanted for many years. I am lifelong collector of words -literally I have journals full of words to look up- but rarely follow through with looking up those words much less review them. I wanted an app that would better serve advanced language learners and travelers.

  This project was an ambitious size for the time-frame. The initial hurdle was figuring out how to consume the four API calls I was making. My biggest challenge was solving for hiding and displaying cards and answers, and randomly shuffling through the cards in a deck. I learned how to approach applications in a more functional way, and got a lot of practice with Redux.

  I built this project on an Express boilerplate (hoping to build the backend to serve user profiles) using react and redux to manage cards. Fetch calls are all done with Thunk. ES6, HTML5 and CSS3. I used three different API: 
      - Oxford English Dictionary API: an incredibly robust API that I would love to delve deeper into
      - Google Translate API
      - Google Vision API

  Next steps are improving UI and micro-interactions, optimizing for mobile and integrating the camera, and getting more out of the OED API -integrating other languages' definition. Check out my issues in Waffle.io!

  [![Stories in Ready](https://badge.waffle.io/lauraturk/lt-flash-cards-express.png?label=ready&title=Ready)](https://waffle.io/lauraturk/lt-flash-cards-express?utm_source=badge)



##### Resources:
This World Cities Icons Set was designed by Agente Studio
All other icons free from Sketch Resources
