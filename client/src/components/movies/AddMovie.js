import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { addNewMovie } from '../../actions/movieActions'
import classnames from "classnames";


class AddMovie extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            genre: "",
            rating: "",
            story: "",
            cast: "",
            releasedate: "",
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };



    onSubmit(e) {
        e.preventDefault();

        const movieData = {
            name: this.getMovieName.value,
            genre: this.getGenre.value,
            rating: this.getRating.value,
            story: this.getStory.value,
            cast: this.getCast.value,
            releasedate: this.getReleasedate.value
        }

        this.props.addNewMovie(movieData, this.props.history)

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    render() {
        const { errors } = this.state;

        return (
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="landing-copy col s12 center-align">
                        <h5 align="center">Add a New Movie</h5>

                        <div style={{ marginTop: 0 , width: 450}}>
                            <form className="row" onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <label for="name">Movie Name</label>
                                    <input id="name" type="text"
                                        ref={(input) => this.getMovieName = input}
                                        error={errors.name}
                                        className={classnames("", {
                                            invalid: errors.name
                                        })}
                                        onChange={this.onChange} />
                                    <span className="red-text left">
                                        {errors.name}
                                    </span>
                                </div>
                                <div className="input-field col s12">
                                    <label>Genre:  </label>
                                    <input id="genre" type="text"
                                        ref={(input) => this.getGenre = input}
                                        error={errors.genre}
                                        className={classnames("", {
                                            invalid: errors.genre
                                        })}
                                        onChange={this.onChange} />
                                    <span className="red-text left">
                                        {errors.genre}
                                    </span>
                                </div>
                                <div className="input-field col s12">
                                    <label>Rating: </label>
                                    <input id="rating" type="number"
                                        ref={(input) => this.getRating = input}
                                        error={errors.rating}
                                        className={classnames("", {
                                            invalid: errors.rating
                                        })}
                                        onChange={this.onChange} />
                                    <span className="red-text left">
                                        {errors.rating}
                                    </span>
                                </div>
                                <div className="input-field col s12">
                                    <label>Story: </label>
                                    <textarea id="story"
                                        ref={(input) => this.getStory = input}
                                        error={errors.story}
                                        className={classnames("", {
                                            invalid: errors.story
                                        })}
                                        onChange={this.onChange} />
                                        <span className="red-text left">
                                        {errors.story}
                                    </span>
                                </div>
                                <div className="input-field col s12">
                                    <label>Cast: </label>
                                    <input id="cast" type="text"
                                        ref={(input) => this.getCast = input}
                                        error={errors.cast}
                                        className={classnames("", {
                                            invalid: errors.cast
                                        })}
                                        onChange={this.onChange} />
                                        <span className="red-text left">
                                        {errors.cast}
                                    </span>
                                </div>

                                <div className="input-field col s12">
                                    <input id="releasedate" type="date"
                                        ref={(input) => this.getReleasedate = input}
                                        error={errors.releasedate}
                                        className={classnames("", {
                                            invalid: errors.releasedate
                                        })}
                                        onChange={this.onChange} />
                                         <span className="red-text left">
                                        {errors.releasedate}
                                    </span>
                                </div>
                                <div className="input-field col s12">
                                    <input type="submit" value="Add Movie" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

AddMovie.propTypes = {
    addNewMovie: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

};
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { addNewMovie })(AddMovie);