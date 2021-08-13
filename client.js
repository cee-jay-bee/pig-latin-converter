//{thing 1} : function that turns a sentence string into an array of individual words
const turnStringSentenceIntoArray = sentence => {
    const space = ` `;
    let arrayOfSpaceIndices = []; 
    let arrayOfWords = [];

    // create an array that will store the spaces indices
    for (let i = 0; i < sentence.length; i++){
        if (sentence.charAt(i) === ` `){  //if the character at sentence at index i is a space 
            arrayOfSpaceIndices.push(sentence.indexOf(space, i)); //push the index into array of space indices
        }   
    }

    //push the first word into the array (special case - only the first word is different)
    arrayOfWords.push(sentence.slice(0, arrayOfSpaceIndices[0])); //slice from char 0 (beginning of word) to wherever the first space is

    //push all the other words into the array ('normal' case - subsequent words all follow same pattern)
    for (let i = 0; i < arrayOfSpaceIndices.length; i++){
        arrayOfWords.push(sentence.slice(arrayOfSpaceIndices[i] + 1, arrayOfSpaceIndices[i+1])); //slice from 1st space to 2nd space (then 2nd to 3rd, then 3rd to 4th... finally last space to end)
    } 
   
    //return the resulting array of words
    return arrayOfWords;
    
}

//{thing 2a} : function that takes in an array and runs each word through the pigLatinWordConverter function (thing 2b)
const piglatinifyWholeSentence = array => {
    let pigLatinArray = [];
    let pigLatinString;

    //put each word from the array through the pigLatinWordConverter, and push the result into the new array pigLatinArray
    for (let words of array){
        pigLatinArray.push(pigLatinWordConverter(words));
    }
    
    //turn the p.l. array into a string, including a space between each word, and store it.
    pigLatinString = pigLatinArray.join(" ");   
    
    //todo - add logic here to capitalize first letter of the sentence?
    pigLatinString = pigLatinString[0].toUpperCase() + pigLatinString.slice(1);

    //return the resulting string
    return pigLatinString;
}

//{thing 2b} : function that turns individual words into piglatin (move first letter to end, add "ay")
const pigLatinWordConverter = inputWord => {
    //make all letters lowercase
    inputWord = inputWord.toLowerCase();
    let vowels = `aeiou`;

    //logic for adding 'way to word if it starts with vowel
    for (let i = 0; i < vowels.length; i++){
        //check to see if the first letter matches any vowel
        if (inputWord[0] === vowels[i]){
            //add 'way' to the inputWord if there is a match
            return inputWord.concat('way');
        }

        if (inputWord[1] === vowels[i]){
            //if firstLetter is not any vowel, but the second letter is, take first letter out and store in variable
            let firstLetter = inputWord.slice(0,1);
            //slice out rest of word and store in variable
            let restOfWord = inputWord.slice(1);
            //add firstLetter and 'ay' to end of restOfWord and return word
            return restOfWord.concat(firstLetter, `ay`);
        }
    }
    //if first two letters are not vowels, take first two letters out and store in variable    
    let firstTwoLetters = inputWord.slice(0,2);

    //slice out rest of word and store in variable
    let wordLessFirstTwo = inputWord.slice(2);

    //add first two letters to end of the rest of the word and 'ay' to the end
    return wordLessFirstTwo.concat(firstTwoLetters, 'ay');

}


//{Finally, use all the above code} 

//todo change this to a prompt so user can input their own sentence
const getSentence = () => {
    if (confirm('Ready to learn Pig Latin?')){
        return prompt(`What sentence do you want to translate? (no punctuation)`);
    }
}


//start by inputting a sentence 
let sentence = getSentence();

//todo - also make sure punctuatuon is not allowed (if contains punctuation, ask user to try again?)

//turn that into an array of words
let arrayfiedSentence = turnStringSentenceIntoArray(sentence);
//piglatinify that array
let piglatinifiedSentence = piglatinifyWholeSentence(arrayfiedSentence);
//log the result
console.log(piglatinifiedSentence);


//todo more stretch goals: 
//add some nice CSS - background color? pig image?? fonts?
//and more HTMl header/p tags to clarify what this app is/does

