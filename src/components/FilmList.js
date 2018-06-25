import React, { Component } from 'react';
import Film from './Film'

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map(film =>
            <Film
                filmName={film.filmName}
                key={film.id}
                reviews={film.reviews}
                addReview={film.addReview}
                removeReview={film.removeReview}>
            </Film>
        );

        return (
            <div className='film-list'>
                {filmNodes}
            </div>
        );
    }
}

export default FilmList;