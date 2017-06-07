export const oedScrubber = (response) => {
  const entries = response.results[0].lexicalEntries[0].entries

  const mapEntries = entries.map(entry => {
      return entry.senses.map(val => {
        return val.definitions[0];
      });
    });


  const flatten = (arr) => {
    return arr.reduce((acc, val) => {
      return acc.concat(Array.isArray(val) ? flatten(val) : val)
    }, [])
  }

  return {
    name: response.results[0].id,
    definitions: flatten(mapEntries)
  }
}
