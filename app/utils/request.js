import axios from 'axios'

export default function request(url, options) {
  const newOptions = {
    url,
    ...options,
  }

  if (!options.headers) {
    newOptions.headers = {
      'Content-type': 'application/json',
    }
  }

  return axios(newOptions).then(response => response.data)
}
