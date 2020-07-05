// SIMPLE FETCH FOR TEST

import { message } from "antd"



const requiredOptions = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Headers' : '*'
  },
}
const defaultOptions = {
  method: 'GET'
}

const simpleFetch = <T>(url: string, options = defaultOptions  ): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(url, { ...requiredOptions, ...options })
      .then((res) => 
         res.json())
      .then((data) => resolve(data))
      .catch(() => reject(message.error('Upps something went wrong')))
  })
}

export default simpleFetch
