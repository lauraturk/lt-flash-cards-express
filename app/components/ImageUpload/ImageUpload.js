import React, { Component } from 'react'
import { Word } from '../Word/Word'
import * as icon from '../../assets/svg-icons'

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
    createTranslationCard({'q': e.target.innerText}, targetLanguage)
  }

  handleClear() {
    const { clearWords } = this.props
    clearWords()
    this.setState({
      file: '',
      imagePreviewUrl: '',
    })
  }

  render() {
    const { findImageWords, foundWords, translateWord } = this.props
    const {imagePreviewUrl} = this.state

    const iconStyle = {
      backgroundImage: icon.pictureIcon,
    }

    let $foundWords = null
    let $imagePreview = null
    let $findWordsButton = null
    let $clearWordsButton = null

    if (foundWords.length) {
      $foundWords =
        <div className="found-words">
          {foundWords.map((word, index) => {
            return (
            <Word key={index} word={word} handleWord={this.handleWordSelect.bind(this)} />
          )
        })}
        </div>

      $clearWordsButton =
        <button className="button-submit"
                onClick={this.handleClear.bind(this)}>
          {icon.cancelIcon}
          <span className="directions-display">CLEAR ALL</span>
        </button>
    }

    if (imagePreviewUrl) {
      $imagePreview =
        (<img src={imagePreviewUrl} style={{width: 300, display: 'block'}} />)

      $findWordsButton =
        <button className="button-submit"
                onClick={this.handleWordSearch.bind(this)}>
          {icon.searchIcon}
          <span className="directions-display">FIND WORDS</span>
        </button>
    }

    return (
      <section className="image-upload-wrapper">
        <label className="picture-upload">
          <input name="file"
            type="file"
            accept="image/*"
            onChange={(e) => {return this.handleFiles(e)}}/>
          {icon.pictureIcon}
          <p className="directions-display">FIND WORDS IN A PICTURE</p>
        </label>
        {$imagePreview}
        {$findWordsButton}
        {$foundWords}
        {$clearWordsButton}
      </section>
    )
  }
}
