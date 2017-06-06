export const oedScrubber = (responseObject) => {
  return responseObject.results[0]
              .lexicalEntries[0]
              .entries[0]
              .senses[0]
              .definitions
}
