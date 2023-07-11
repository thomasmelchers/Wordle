import bankOfWord from "./bankOfWord.json"

export const boardDefault: string [][] = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
]

export const generateWordSet = () => {
   
    const wordsData: string [] = bankOfWord.words
    const wordToGuess = wordsData[Math.floor(Math.random() * wordsData.length)]
    

    return wordToGuess

}