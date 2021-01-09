import cuid from 'cuid';

export default function restaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return { ...state, restaurants: [ ...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(r => r.id !== action.id)
            return { ...state, restaurants: [ ...restaurants ] }
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            return { ...state, reviews: [ ...state.reviews, review ] }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(r => r.id !== action.id)
            return { ...state, reviews: [ ...reviews ] }
        default:
            return state
    }
}
