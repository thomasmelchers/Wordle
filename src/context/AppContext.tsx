import { createContext, useContext } from "react";
import { currentAttempType, gameOverType } from "../App";

interface AppContextType {
 board: string[][],
 setBoard: React.Dispatch<React.SetStateAction<string[][]>>,
 currentAttempt: currentAttempType,
 setCurrentAttempt: React.Dispatch<React.SetStateAction<currentAttempType>>,
 onSelect: (keyValue: string) => void,
 onDelete: () => void, 
 onEnter: () => void,
 correctWord: string,
 disabledLetters: string[], 
 setDisabledLetters: React.Dispatch<React.SetStateAction<string[]>>
 gameOver: gameOverType, 
 setGameOver: React.Dispatch<React.SetStateAction<gameOverType>>
}

interface AppContextProviderType  {
    value: AppContextType
    children: React.ReactNode
}

// create the context
export const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext)
    if(!context) {
        throw new Error('useAppContext must be used within a AppContextProvider')
    }
    return context
}

// Provider
export const AppContextProvider: React.FC<AppContextProviderType> = ({value, children}) => {
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}