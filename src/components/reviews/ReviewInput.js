import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text-area' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
