import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavories: (id) => { },
    removeFavorites: (id) => { }
})

function FavoritesContextProvider({ children }) {

    const [mealIds, setMealIds] = useState([])

    const addFavoriteMeal = (id) => {
        setMealIds(currentMealIds => [...currentMealIds, id])
        console.log(`item with id ${id} was added`)
    }

    const removeFavoriteMeal = (id) => {
        setMealIds(currentMealIds => currentMealIds.filter(mealId => mealId !== id))
        console.log(`item with id ${id} was removed`)
    }

    const contextValue = {
        ids: mealIds,
        addFavories: addFavoriteMeal,
        removeFavorites: removeFavoriteMeal
    }

    return <FavoritesContext.Provider value={contextValue}>
        {children}
    </FavoritesContext.Provider>

}

export default FavoritesContextProvider;