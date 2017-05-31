export const googleVisionFetch = (string) => {
  return fetch('/api/vision', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(setBody(string))
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'in visionFetch'))
  }

const setBody = (string) => {
  return {
    "requests": [
      {
        "image": {
          "content": string
        },
        "features": [
          {
            "type": "DOCUMENT_TEXT_DETECTION",
            "type": "TEXT_DETECTION"
          }
        ]
      }
    ]
  }
}
