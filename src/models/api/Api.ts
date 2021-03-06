/* eslint-disable camelcase */
export interface Film {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: Date
    species: []
    starships: []
    vehicles: []
    characters: []
    planets: []
    url: string
    created: string
    edited: string
}

export interface Characters {
    name: string
    birth_year: string
    eye_color: string
    gender: string
    hair_color: string
    height: string
    mass: string
    skin_color: string
    homeworld: string
    films: string[]
    species: []
    starships: []
    vehicles: []
    url: string
    created: string
    edited: string
}


export interface ResponseList<T> {
    count: number, 
    next: string, 
    previous: null, 
    results : T[]
}