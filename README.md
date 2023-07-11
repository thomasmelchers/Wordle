# Wordle

![Wordle](/assets/screenshot.png)

## Description

Creation of a **Wordle game**. The rule is simple: you have 6 chances to guess a word of 5 letters. If the letter is at right place, it will be shown in a green background. If the letter is include in the word but not at the right place, it will be displayed with a yellow background. Otherwise, the keyboard will show that the letter is not correct. 

## Concept

**The game display has :** 
- a table (6 rows X 5 columns). Each row represent a new attempt, each cell is a letter;
- a keyboard which display after each attempt the letter already used. 

**How to play:** 
- use the keyboard;
- use the keyboard of your machine.

**Validation** will be done after each attempt. It compares the given word with the correct. If some letters are correct, their background will change from dark to colorful. 

## Technologies
- React (useContext, useKeyDown Event) 
- Typescript;
- CSS Module StyleSheet. 