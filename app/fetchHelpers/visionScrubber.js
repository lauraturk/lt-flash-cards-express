export const visionScrubber = (responseObject) => {
  const wordSet = responseObject.responses[0].textAnnotations.reduce((accu, word, index) => {
    accu.push(word.description)
    return accu
  }, [])
  return wordSet.splice(1, wordSet.length)
}
