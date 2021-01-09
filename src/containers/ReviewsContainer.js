import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


  render() {
    const { addReview, restaurantId, deleteReview, reviews } = this.props
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurantId}/>
        <Reviews 
          reviews={reviews.filter(r => r.restaurantId === restaurantId)} 
          deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
