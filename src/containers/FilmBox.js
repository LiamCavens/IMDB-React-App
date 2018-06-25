import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [
                { id: 1, filmName: 'Sausage Party', review: 'Pure Average' },
                { id: 2, filmName: 'Team America', review: 'So realistic' },
                { id: 3, filmName: 'Shawshank Redemption', review: 'Too funny' },
                { id: 4, filmName: 'Guardians of the Galaxy', review: `Best film I've ever seen` }
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
};

export default CommentBox;