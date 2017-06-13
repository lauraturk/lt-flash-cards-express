## Flash Lingua:

[Production Site: Try it out here!](https://flash-lingua.herokuapp.com/search)

#### A travel/language learning app that allows you to search for translations by photo or text from/to any of the 100+ languages supported by Google Translate. Additionally, definitions are available in Spanish provided by the Oxford English Dictionary. Translation or definition in hand, save the words you want to practice in flashcard decks tailored to you!

## Project Status
This project is currently in development. Next steps include:
* building a server to store user profiles 
* optimizing for mobile and mobile cameras
* adding additional UI for better flashcard practice.

## Project Screen Shot(s)   
#### Finding Words and Adding cards to a deck using Google Translate
![Find Words and Add to Deck](http://g.recordit.co/uGtHWQbwv4.gif)

#### Finding definitions for Spanish translations using Oxford English Dictionary
[Spanish Definition](http://g.recordit.co/tYWvYKbBPD.gif)

#### Finding Words from image using Google Vision
[Google Vision](http://g.recordit.co/k3JXmOIwlj.gif)

#### Flashcards
[Flashcards](http://g.recordit.co/vaHgMwGKQN.gif)

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

 The inspiration for this app was a desire to have a better, lazier way of finding and storing words. As a life-long language learner I love the ease integrated dictionaries lend to reading in a second language with an ebook, and found myself awkwardly trying to photograph my IRL book to achieve the same thing with Google translate. Even when I was successful, the newly acquired word was soon lost in my mind. I wanted a way to not only find, but store the words for future practice. It was important to include the Spanish dictionary in order to make flashcards that ultimately would be better for language learning. 

  The initial hurdle was figuring out how to consume the four API calls I was making. My biggest challenge was solving for hiding and displaying cards and answers, and randomly shuffling through the cards in a deck. I learned how to approach applications in a more functional way, and got a lot of practice with Redux.

  I built this project on an Express boilerplate (hoping to build the backend to serve user profiles soon) using React, React-Router and Redux. API calls done using the Fetch API and Thunk middleware. I used three different APIs:
      - Oxford English Dictionary API: an incredibly robust API that I would love to delve deeper into
      - Google Translate API
      - Google Vision API
      
 Unit and feature testing using fetchmock, Enzyme, and Jest with the Mocha assertion library. HTML5, CSS3 and ES6 used throughout.

  Next steps are improving UI and micro-interactions, optimizing for mobile and integrating the camera, and getting more out of the OED API -integrating other languages' definition. Check out my issues in Waffle.io!

  [![Stories in Ready](https://badge.waffle.io/lauraturk/lt-flash-cards-express.png?label=ready&title=Ready)](https://waffle.io/lauraturk/lt-flash-cards-express?utm_source=badge)



##### Resources:
Built with [Express Boilerplate](https://github.com/martensonbj/express-boilerplate)

This World Cities Icons Set was designed by Agente Studio

All other icons free from Sketch Resources

[background image](http://unsplash.com/@andrewtneel?utm_campaign=photographer-credit) by Andrew Neel

##### Wireframes using Sketch:
[card deck](https://github.com/lauraturk/lt-flash-cards-express/tree/master/app/screenshots/Flash-Card-Deck.png)
[flash cards](https://github.com/lauraturk/lt-flash-cards-express/tree/master/app/screenshots/Flash-Cards.png)
[translation options](https://github.com/lauraturk/lt-flash-cards-express/tree/master/app/screenshots/Translation-Options.png)
[additional wireframes](https://github.com/lauraturk/lt-flash-cards-express/tree/master/app/screenshots)


