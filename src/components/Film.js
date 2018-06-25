import React, { Component } from 'react';

class Film extends Component {
    render() {
        return (
            <div className='films'>
                <h3 className='film-review'>{this.props.filmName} <button type="submit">Add Review</button></h3>
                <p> - {this.props.children} </p>
            </div>
        );
    };
}

export default Film;