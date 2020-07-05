const baseUrl = process.env.REACT_APP_SWAPI_DOMAIN

const URL = {
  films: `/films`,
  people: `${baseUrl}/people`,
  peopleWithPagination: (page: number): string => `${baseUrl}/people/?page=${page}`,
}

export default URL
