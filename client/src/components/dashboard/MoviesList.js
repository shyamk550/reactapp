import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions'

class MoviesList extends React.Component {
    componentWillMount() {
        this.props.fetchMovies();
    }
    render() {
        const allmovies = Array.from(this.props.allmovies);
        const movieItems = allmovies.map(movies => (

        <div key={movies.id}>
            <h4>{movies.name}</h4> 
            Genre:  <span  style={{ color: "red"}}> {movies.genre}</span><br/>
            Cast:   <span  style={{ color: "purple"}}> {movies.cast}</span>
            <p><b>Summary: </b> {movies.story}</p>
        </div>
    ))
        return (
            <div style={{ paddingTop: 10 }} className="container valign-wrapper">
        <div className="row">
        <h5>Below are the list of movies</h5>
            {movieItems}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allmovies: state.movieslist.movies
});

export default connect(mapStateToProps, { fetchMovies })(MoviesList)