export const translationFetch = (q, target) => {
  console.log(q, target)
  return fetch('/api/languages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Object.assign({}, q, target))
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
