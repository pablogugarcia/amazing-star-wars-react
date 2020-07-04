// SIMPLE FETCH FOR TEST



const requiredOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
}
const defaultOptions = {
  method: 'GET',
}

const simpleFetch = <T>(url: string, options = defaultOptions  ): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(url, { ...requiredOptions, ...options })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(() => reject(alert('ERROR')))
  })
}

export default simpleFetch
