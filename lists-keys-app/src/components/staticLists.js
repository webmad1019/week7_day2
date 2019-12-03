import React from 'react'

const cities = ['Madrid', 'Barcelona', 'Bilbao', 'Gijón', 'Ghotham']
export const citiesList = cities.map((city, idx) => <li key={idx}>{city}</li>)

const movies = ['Sharknado', 'Campamento Flippy', 'Condemorrr', 'Spanish Movie', 'Rubber']
export const moviesList = movies.map((movie, idx) => <li key={idx}>{movie}</li>)