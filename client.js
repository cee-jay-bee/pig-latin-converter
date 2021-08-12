// //declare input word
// let word = 'Dunkin';
// //make all letters lowercase
// word = word.toLowerCase();
// //take first letter out and store in variable
// let firstLetter = word.slice(0,1);
// console.log(firstLetter);
// //slice out rest of word 
// let restOfWord = word.slice(1);
// console.log(restOfWord);
// //add firstLetter and 'ay' to end of restOfWord
// let pigLatin = restOfWord.concat(firstLetter, `ay`);
// console.log(pigLatin);

const pigLatinConverter = inputWord => {
    //make all letters lowercase
    inputWord = inputWord.toLowerCase();
    //take first letter out and store in varible
    let firstLetter = inputWord.slice(0,1);
    //slice out rest of word
    let restOfWord = inputWord.slice(1);
    //add firstLetter and 'ay' to end of restOfWord
    let pigLatin = restOfWord.concat(firstLetter, `ay`);
    return pigLatin;
}
console.log(pigLatinConverter('Donuts'));

//start with a sentence
let sentence = `Dunkin Donuts has coffee and some mediocre donuts`;

//Write loop to find words in sentence
const turnStringIntoArray = sentence => {
    const space = ` `;
    const indexOfFirst = sentence.indexOf(space);
    let arrayOfSpaces = [];
    let arrayOfWords = [];

    // create an array
    for (let i = 0; i < sentence.length; i++){
        //if the character at sentence at index i is a space push the index into array
        if (sentence.charAt(i) === ` `){
            console.log(`The index of the spaces are ${sentence.indexOf(space, i)}`);
            console.log(`else i:`, i);
            arrayOfSpaces.push(sentence.indexOf(space, i));
        }   
    }
    console.log(arrayOfSpaces);

    //pushes first word into array
    arrayOfWords.push(sentence.slice(0, arrayOfSpaces[0]));

    //pushes every other word into array
    for (let i = 0; i < arrayOfSpaces.length; i++){
        arrayOfWords.push(sentence.slice(arrayOfSpaces[i] + 1, arrayOfSpaces[i+1]));
    
    } return arrayOfWords;
}

const pigLatinifiedSentence = array => {
    let pigLatinArray = [];
    for (let words of array){
        pigLatinArray.push(pigLatinConverter(words));
    }console.log(...pigLatinArray);
}

pigLatinifiedSentence(turnStringIntoArray(sentence));






