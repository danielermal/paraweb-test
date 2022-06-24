import { GET_CARDS_REQUEST, GET_CARDS_SUCCESS, GET_CARDS_FAILED } from "../actions/cards";

const initialState = {
    getCardsRequest: false,
    getCardsSuccess: false,
    getCardsFailed: false,
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS_REQUEST: {
            return {...state, getCardsRequest: true}
        }
        case GET_CARDS_SUCCESS: {
            return {...state, getCardsRequest: false, getCardsSuccess: true, data: action.data}
        }
        case GET_CARDS_FAILED: {
            return {...state, getCardsRequest: false, getCardsFailed: true}
        }
    }
}

export const rootReducer = reducer