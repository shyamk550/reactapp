import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { getMoviebyName } from '../../actions/movieActions'
import classnames from "classnames";


class EditMovie extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.getMoviebyName(this.getMovieName.value);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    render() {
       // const { errors } = this.props.errors;
        console.log("errors")

        console.log(this.props.errors)
        var movieDetails;
        if (this.props.movie.name) {
            movieDetails = <div key={this.props.movie.id}>
                <h4>{this.props.movie.name}</h4>
                Genre:  <span style={{ color: "red" }}> {this.props.movie.genre}</span><br />
                Cast:   <span style={{ color: "purple" }}> {this.props.movie.cast}</span>
                <p><b>Summary: </b> {this.props.movie.story}</p>
            </div>
        }
        return (
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="landing-copy col s12 center-align">
                        <h5 align="center">Edit Movies</h5>

                        <div style={{ marginTop: 0, width: 450 }}>
                            <form className="row" onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <label for="name">Movie Name</label>
                                    <input id="name" type="text"
                                        ref={(input) => this.getMovieName = input}
                                        //   error={errors.name}
                                        // className={classnames("", {
                                        //     invalid: errors.name
                                        // })}
                                        onChange={this.onChange} />
                                    <span className="red-text left">
                                        {/* {errors.name} */}
                                    </span>
                                </div>

                                <div className="input-field col s12">
                                    <input type="submit" value="Search" className="btn btn-primary" />
                                </div>
                            </form>
                            {movieDetails}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

EditMovie.propTypes = {
    getMoviebyName: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired

};
const mapStateToProps = state => ({
    movie: state.movieslist.movie,
    errors: state.errors
});

export default connect(mapStateToProps, { getMoviebyName })(EditMovie);