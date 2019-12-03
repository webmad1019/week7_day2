import React, { Component } from 'react'

import MovieCard from './movieCard'

class List extends Component {
    constructor() {
        super()
        this.state = {
            showOscar: true,
            movies: [
                { title: "The Godfather", director: "Francis Coppola", oscar: true, rating: 6 },
                { title: "Sharknado", director: "Francis Coppola", oscar: false, rating: 2 },
                { title: "Campamento Flippy", director: "Almodóvar", oscar: true, rating: 5 },
                { title: "Flubber", director: "Almodóvar", oscar: false, rating: 6 },
                { title: "Star Wars", director: "Rian Johnson", oscar: true, rating: 9 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", oscar: true, rating: 4 }
            ]
        }
    }

    deleteMovieHandler = id => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(id, 1)
        this.setState({ movies: moviesCopy })
    }

    toggleMoviesHandler = () => this.setState({ showOscar: !this.state.showOscar })



    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.oscar === this.state.showOscar)

        return (
            <>
                {filteredMovies.map((movie, idx) => <MovieCard key={idx} {...movie} deleteMovie={() => this.deleteMovieHandler(idx)} />)}
                <button className="btn btn-dark" onClick={this.toggleMoviesHandler}>{this.state.showOscar ? <span>Ver películas sin oscar</span> : <span>Ver películas con oscar</span>}</button >
            </>
        )
    }
}


export default List