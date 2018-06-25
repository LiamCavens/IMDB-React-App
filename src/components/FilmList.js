import React, { Component } from 'react';
import Film from './Film'

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map(film => 
             <Film filmName={film.filmName} key={film.id}>
                {film.review}
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