export const definitionsFetch = (q) => {
  return fetch('/api/definitions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"data": q})
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'in definitionFetch'))
  }
