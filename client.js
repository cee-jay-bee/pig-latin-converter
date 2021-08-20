const beginPigLatin = () => {
    let sentence = document.getElementById('pigLatinInput').value;

    let arrayifiedSentence = turnStringSentenceIntoArray(sentence);    
    piglatinifyWholeSentence(arrayifiedSentence);
}

//{thing 1} : function that turns a sentence string into an array of individual words
const turnStringSentenceIntoArray = (sentence) => {
    const space = ` `;
    let arrayOfSpaceIndices = []; 
    let arrayOfWords = [];
   // console.log(sentence);
    

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
    return piglatinifyWholeSentence(arrayOfWords);
}

//{thing 2a} : function that takes in an array and runs each word through the pigLatinWordConverter function (thing 2b)
const piglatinifyWholeSentence = array => {
    let pigLatinArray = [];
    let pigLatinString;
    console.log('hi');

    //put each word from the array through the pigLatinWordConverter, and push the result into the new array pigLatinArray
    for (let words of array){
        pigLatinArray.push(pigLatinWordConverter(words));
    }
    
    //turn the p.l. array into a string, including a space between each word, and store it.
    pigLatinString = pigLatinArray.join(" ");   
    
    //add logic here to capitalize first letter of the sentence?
    pigLatinString = pigLatinString[0].toUpperCase() + pigLatinString.slice(1);

    //return the resulting string
    document.getElementById('pigLatinOutput').innerHTML = pigLatinString;
}

//{thing 2b} : function that turns individual words into piglatin (move first letter to end, add "ay")
const pigLatinWordConverter = inputWord => {
    //make all letters lowercase
    let rawPork = inputWord.toLowerCase();
    let punctuation = `.!?,`;
    punctuation = punctuation.split('');


    //check to see if the first letter matches any vowel
    if (rawPork[0] === 'a' || rawPork[0] === 'e' || rawPork[0] === 'i' || rawPork[0] === 'o' || rawPork[0] === 'u'){
        //add 'way' to the inputWord if there is a match
        rawPork = inputWord.concat('way');
        console.log(rawPork);
    } else {
        let originalLength = rawPork.length;
        for (let i = 0; i < originalLength; i++){
            if (rawPork[i] === 'a' || rawPork[i] === 'e' || rawPork[i] === 'i' || rawPork[i] === 'o' || rawPork[i] === 'u'){
                let lettersBeforeVowel = rawPork.slice(0, i);
                let lettersAfterVowel = rawPork.slice(i);
                rawPork = lettersAfterVowel.concat(lettersBeforeVowel, 'ay');
                console.log(rawPork);
                break;  
            }
        }
    }

    let cookedPork = rawPork;
    //loop through for punctuation
    for (let i = 0; i < rawPork.length; i++){
        for(let j = 0; j < punctuation.length; j++){
            
            if(rawPork[i] === punctuation[j]){

                rawPork = rawPork.split('');

                let splicedPunctuation = rawPork.splice(i, 1);

                rawPork.push(splicedPunctuation);

                cookedPork = rawPork.join('');
                console.log(cookedPork);
            }
        }
    } return cookedPork;
}



//todo more stretch goals: 
//add some nice CSS - background color? pig image?? fonts?
//and more HTMl header/p tags to clarify what this app is/does

