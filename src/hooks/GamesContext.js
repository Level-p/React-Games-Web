import { createContext, useReducer } from "react";
import GamesReducer from "./GamesReducer";

const GameContext = createContext()

export const GamesProvider = ({children}) => {

    const initial = {
        latest: [],
        category: [],
        game: {},
        loading: true,
    }

    const [state, dispatch] = useReducer(GamesReducer, initial)


    return <GameContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GameContext.Provider>
}

export default GameContext