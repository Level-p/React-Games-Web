 const GamesReducer = (state, action) => {
    switch(action.type){
        case 'GET_LISTS': 
            return {
                ...state,
                latest: action.payload,
            }
        case 'GET_SINGLE_GAME_INFO':
            return{
                ...state,
                game: action.payload,
            }
        case 'GET_LIST_CATEGORY': 
            return {
                ...state,
                category: action.payload,
            }
        default:
            return state
    }
}

export default GamesReducer