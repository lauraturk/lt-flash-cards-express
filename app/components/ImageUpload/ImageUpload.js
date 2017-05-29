import React, { Component } from 'react'

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

  render() {
    const {imagePreviewUrl} = this.state

    let $imagePreview = null

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{width: 200, height: 100}} />)
    }

    return (
      <section>
        <input type="file"
               accept="image/*"
               onChange={(e) => {return this.handleFiles(e)}}></input>
        {$imagePreview}
      </section>
    )
  }
}
