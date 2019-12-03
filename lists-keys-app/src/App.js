import React from 'react';
import './App.css';

import { citiesList, moviesList } from './components/staticLists'

import DynamicMoviesList from './components/dynamicList'

function App() {
  return (
    <section className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">

            <h2>Lista de ciudades:</h2>
            {citiesList}

          </div>

          <div className="col-md-6">

            <h2>Lista de pelis:</h2>
            {moviesList}

          </div>

        </div>

        <h2>Listado dinámico de películas</h2>

        <div className="row">
          <DynamicMoviesList />
        </div>

      </div>
    </section>
  )
}

export default App;
