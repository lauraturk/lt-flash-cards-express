export const languagesFetch = () => {
  return fetch('/api/languages', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
