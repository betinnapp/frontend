import axios from 'axios'

const REQUEST_TIMEOUT = 30000

export default function request(url, options) {
  const newOptions = {
    url,
    timeout: REQUEST_TIMEOUT,
    ...options,
  }

  if (!options.headers) {
    newOptions.headers = {
      'Content-type': 'application/json',
    }
  }

  return axios(newOptions).then(response => response.data)
}
