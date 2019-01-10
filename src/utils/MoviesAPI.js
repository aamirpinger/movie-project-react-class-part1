const api = process.env.REACT_APP_MOVIES_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/movies`, { headers })
    .then(res => res.json())
    .then(data => data.movies)

export const remove = (movie) => {
  
  fetch(`${api}/movies/${movie}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.movie)
}
    export const create = (body) =>
  fetch(`${api}/movies`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
