import React, { Component } from 'react';
import FilmList from '../components/FilmList';

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [
                { id: 1, filmName: 'Sausage Party', reviews: ['Pure Average', 'Made me hungry'], onClick: this.makeAddReviewEventHandler(0) },
                { id: 2, filmName: 'Team America', reviews: ['So realistic'], onClick: this.makeAddReviewEventHandler(1) },
                { id: 3, filmName: 'Shawshank Redemption', reviews: ['Too funny'], onClick: this.makeAddReviewEventHandler(2) },
                { id: 4, filmName: 'Guardians of the Galaxy', reviews: [`Best film I've ever seen`], onClick: this.makeAddReviewEventHandler(3) }
            ]
        };
    }

    render() {
        return (
            <div className='film-reviews-box'>
                <h1>UK Opening Box Office</h1>
                <h2>Film List</h2>
                <FilmList films={this.state.films} />
            </div>
        );
    };

    makeAddReviewEventHandler(index) {
        return review => {
            const films = this.state.films;
            films[index].reviews = [
                ...films[index].reviews, review // spread copies array, then adds the contents to a new array
            ];
            this.setState(films);
        }
    }
};

export default CommentBox;