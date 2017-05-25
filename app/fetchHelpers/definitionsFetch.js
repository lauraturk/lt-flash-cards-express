export const definitionsFetch = (q) => {
  return fetch('/api/definitions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"data": q})
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
