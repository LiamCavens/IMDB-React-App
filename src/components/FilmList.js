import React, { Component } from 'react';
import Film from './Film'

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map(film =>
            <Film filmName={film.filmName} key={film.id} onClick={film.onClick}>
                {film.reviews.map((review, index) =>
                    <li key={index}>{review}</li>
                )}
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