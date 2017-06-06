////wrap in if(responseObject && response[0]) then go ahead safeguard if the api changes
export const visionScrubber = (responseObject) => {
  const wordSet = responseObject.responses[0].textAnnotations.reduce((accu, word, index) => {
    accu.push(word.description)
    return accu
  }, [])
  return wordSet.splice(1, wordSet.length)
}
