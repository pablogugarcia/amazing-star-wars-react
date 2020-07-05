const URL = {
  films: 'https://swapi.dev/api/films',
  people: 'https://swapi.dev/api/people',
  peopleWithPagination: (page: number): string => `https://swapi.dev/api/people/?page=${page}`,
}


export default URL;