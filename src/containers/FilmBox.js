import React, { Component } from 'react';
import FilmList from '../components/FilmList';

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [
                {
                    id: 1,
                    filmName: 'Sausage Party',
                    reviews: ['Pure Average 5/5', 'Made me hungry 2/5'],
                    addReview: this.makeAddReviewEventHandler(0),
                    removeReview: this.makeRemoveReviewEventHandler(0)
                },
                {
                    id: 2,
                    filmName: 'Team America',
                    reviews: ['So realistic 5.5/5'],
                    addReview: this.makeAddReviewEventHandler(1),
                    removeReview: this.makeRemoveReviewEventHandler(1)
                },
                {
                    id: 3,
                    filmName: 'Shawshank Redemption',
                    reviews: ['Too funny 1/5'],
                    addReview: this.makeAddReviewEventHandler(2),
                    removeReview: this.makeRemoveReviewEventHandler(2)
                },
                {
                    id: 4,
                    filmName: 'Guardians of the Galaxy',
                    reviews: [`Best film I've ever seen 5/5`],
                    addReview: this.makeAddReviewEventHandler(3),
                    removeReview: this.makeRemoveReviewEventHandler(3)
                }
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

    makeAddReviewEventHandler(filmIndex) {
        return review => {
            const films = this.state.films;
            films[filmIndex].reviews = [
                ...films[filmIndex].reviews, review // spread copies array, then adds the contents to a new array
            ];
            this.setState(films);
        }
    }

    makeRemoveReviewEventHandler(filmIndex) {
        return reviewIndex => {
            const films = this.state.films;
            const reviews = films[filmIndex].reviews;
            reviews.splice(reviewIndex, 1);
            this.setState(films);
        }
    }
};

export default CommentBox;