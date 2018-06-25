import React, { Component } from 'react';

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map(film => {
            return <Film filmName={film.filmName} key={film.id}>
                {film.review}
            </Film>
        });

        return (
            <div className='film-list'>
                {filmNodes}
            </div>
        );
    }
}

export default FilmList;