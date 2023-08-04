const url = process.env.REACT_APP_GAMES_WEB_URL;
const singleGameUrl = process.env.REACT_APP_SINGLE_GAME_WEB_URL;
const categoryUrl = process.env.REACT_APP_GAMES_WEB_CATEGORY_URL;
// const key = process.env.REACT_APP_GAMES_WEB_KEY;


export const getGames = async () => {
    try {
        const res = await fetch(url, {
            method: 'GET',
        })
        const data = await res.json();
        return data.slice(0,50)
    } catch (error) {
        console.log(error);
    }
}

export const getSingleGame = async(id) => {
    try {
        const res = await fetch(`${singleGameUrl}?id=${id}`, {
            method: 'GET',
        })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getGameCategory = async(category) => {
    try {
        const res = await fetch(`${categoryUrl}=${category}`, {
            method: 'GET',
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}