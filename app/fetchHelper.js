export default class fetchHelper {

  static translationFetch({q, target}) {
    return fetch('/api/languages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'q': q, 'target': target})
      })
      .then(response => response.json())
      .then(data => console.log(data))
}

  static languagesFetch() {
    return fetch('/api/languages', {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }

  static definitionsFetch(q) {
    return fetch('/api/definitions', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(q)

      })
      .then(response => response.json())
      .then(data => console.log(data))
    }
}
