export const translationFetch = ({q, target}) => {
  return fetch('/api/languages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'q': q, 'target': target})
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
