export const oedScrubber = (response) => {
  console.log(response)
  return responseObject.results[0]
  .lexicalEntries[0]
  .entries[0]
  .senses[0]
  .definitions
}


///trying to use reduce to pull out all the definitions of the word
///^^^^ pulls out the first definition of the first sense of the first entry
/// looking to get all of the definitions


// response.results[0].lexicalEntries.reduce((accu1, entry) => {
//   accu1.push(entry.entries.reduce((accu2, senses) => {
//     accu2.push(senses.map(sense => {
//       return sense.definitions
//     }))
//     return accu2
//   }, [])
//   return accu1
// }, [])
