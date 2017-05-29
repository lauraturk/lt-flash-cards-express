export const languagesFetch = () => {
  return fetch('/api/languages', {
      method: 'GET',
    })
    .then(response => response.json())

    .catch(error => console.log(error))
  }
