import React, { Component } from 'react'
import { Word } from '../Word/Word'

export default class ImageUpload extends Component {
  constructor() {
    super()
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  handleFiles(e) {
    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
  }

  handleWordSearch() {
    const { findImageWords, foundWords } = this.props
    const b64 = this.state.imagePreviewUrl.split("base64,")[1];
    findImageWords(b64)
  }

  handleWordSelect(e) {
    const { createTranslationCard, targetLanguage } = this.props
    createTranslationCard({'q' : e.target.innerText}, targetLanguage)
  }

  render() {
    const { findImageWords, foundWords, translateWord } = this.props
    const {imagePreviewUrl} = this.state

    let $foundWords = null
    let $imagePreview = null

    if (foundWords) {
      $foundWords = foundWords.map((word, index) => {
        return (
          <Word key={index} word={word} handleWord={this.handleWordSelect.bind(this)} />
        )
      })
    }

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{width: 200, height: 100}} />)
    }

    return (
      <section>
        <input type="file"
               accept="image/*"
               onChange={(e) => {return this.handleFiles(e)}}></input>
        {$imagePreview}
        <button onClick={this.handleWordSearch.bind(this)}>Find Words</button>
        {$foundWords}
        <button onClick={this.props.clearWords}>Clear Words</button>
      </section>
    )
  }
}
