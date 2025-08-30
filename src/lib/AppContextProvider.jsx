import React from 'react'
import { MealProvider } from './MealContext '
import { FavoritesProvider } from './FavoritesContext'

function AppContextProvider({ children }) {
    return (
        <MealProvider>
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </MealProvider>
    )
}

export default AppContextProvider
