import React, { Component } from 'react';

class Film extends Component {
    state = {
        reviewText: ''
    }

    render() {
        return (
            <div className='films'>
                <h3 className='film-review'>{this.props.filmName} </h3>
                <ul>{this.props.children}</ul>
                <textarea name="reviewBox" value={this.state.reviewText} onChange={this.onChange}>
                </textarea>

                <button type="submit" onClick={this.onClick}>
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
        console.log(this.props.onClick)

        this.props.onClick(this.state.reviewText)
    };
}

export default Film;