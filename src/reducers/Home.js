import {fromJS} from 'immutable'

// constants
const INCREMENT_COUNTER = fromJS('increment_counter')
const DECREMENT_COUNTER = fromJS('decrement_counter')
const RESET_COUNTER = fromJS('reset_counter')

// actions
export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}

export const resetCounter = () => {
    return {
        type: RESET_COUNTER
    }
}


// reducer
const initialState = fromJS({
    count: 0
})

export const Home = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT_COUNTER: {
            return state.withMutations(val => {
                val.set('count', val.get('count')+1)
            })
        }
        case DECREMENT_COUNTER: {
            return state.withMutations(val => {
                val.set('count', val.get('count')-1)
            })
        }
        case RESET_COUNTER: {
            return state.withMutations(val => {
                val.set('count', 0)
            })
        }
        default:
            return state
    }
}
