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

    //return the resulting string
    return pigLatinString;
}

//{thing 2b} : function that turns individual words into piglatin (move first letter to end, add "ay")
const pigLatinWordConverter = inputWord => {
    //make all letters lowercase
    inputWord = inputWord.toLowerCase();

    //take first letter out and store in varible
    let firstLetter = inputWord.slice(0,1);

    //slice out rest of word and store in variable
    let restOfWord = inputWord.slice(1);

    //add firstLetter and 'ay' to end of restOfWord
    let pigLatin = restOfWord.concat(firstLetter, `ay`);

    //todo - this does not include special case where word begins with vowel - 
    //according to a pig latin dictionary we found, then we add "way" instead of "ay"
    //e.g. and -> andway in piglatin
    //so, the todo would be to add logic for that here. 

    //return the resulting "piglatin-afied word"
    return pigLatin;
}


//{Finally, use all the above code} 

//start by inputting a sentence
let sentence = `Dunkin Donuts has coffee and some mediocre donuts`; 
//todo change this to a prompt so user can input their own sentence
//todo - also make sure punctuatuon is not allowed (if contatins punctuation, ask user to try again?)

//turn that into an array of words
let arrayfiedSentence = turnStringSentenceIntoArray(sentence);
//piglatinify that array
let piglatinifiedSentence = piglatinifyWholeSentence(arrayfiedSentence);
//log the result
console.log(piglatinifiedSentence);


//todo more stretch goals: 
//add some nice CSS - background color? pig image?? fonts?
//and more HTMl header/p tags to clarify what this app is/does

