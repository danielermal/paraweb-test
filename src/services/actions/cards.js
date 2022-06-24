import { getCardsRequest, checkResponse } from "../../utils/constants"
export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAILED = 'GET_CARDS_FAILED'

export const getCards = () => {
    return function (dispatch) {
        dispatch({type: GET_CARDS_REQUEST})
        getCardsRequest()
        .then(checkResponse)
        .then((data) => {       
            dispatch({type: GET_CARDS_SUCCESS, data: checkCards(data)})
        })
        .catch((err) => {
            dispatch({type: GET_CARDS_FAILED})
        })
    }
}

const checkCards = (data) => {
    const cards = data.articles
    data.articles = cards.map((card) => {
        const data = card.publishedAt.split('T')[0].split('-')
        if (data[1] === '04') {
            data[1] = 'апреля'
        }
        card.publishedAt = data.reverse().join(' ')
        if (!card.author) {
            card.author = 'Автор неизвестен'
        }
        return card
    })
    return data
}