import React, { Component } from 'react';

class Film extends Component {
    state = {
        reviewText: ''
    }

    render() {
        return (
            <div className='films'>
                <h3 className='film-review'>{this.props.filmName} </h3>

                <ul>
                    {this.props.reviews.map((review, index) =>
                        <li key={index}>{review}
                            <button onClick={() => this.removeReviewOnClick(index)}>
                                Remove
                            </button>
                        </li>
                    )}
                </ul>
                <textarea name="reviewBox" value={this.state.reviewText} onChange={this.onChange} placeholder="Type review here...">
                </textarea>

                <button onClick={this.onClick}>
                    Add Review
                </button>
            </div>
        );
    };

    onChange = event => {
        console.log(event.currentTarget.value)
        this.setState({
            reviewText: event.currentTarget.value
        })
    };

    onClick = () => {
        this.props.addReview(this.state.reviewText)
        this.setState({
            reviewText: ''
        })
    };

    removeReviewOnClick = (index) => {
        this.props.removeReview(index)
    }
}

export default Film;