const fs = require('fs')
var prepend = require('prepend');
const fileContents = fs.readFileSync('./german.txt').toString().toLowerCase()
const prompt = require("prompt-sync")({ sigint: true });
const lines = fileContents.split('\n')
const word = prompt("Word: ");
const Length = prompt("Length: ");
const letter = word.split('')
const file = './array.txt'
let containsDuplicates = (str) => {
    let set = new Set();
    
    //convert str to lowercase
    //Remove this if you want to check for incase-sensitive strings
    str = str.toLowerCase();
    
    //If it is not whitespace the check if aplhabet is present or not
    for(let i = 0; i < str.length; i++){
  
     if(str[i] != ' '){
  
      if(set.has(str[i])){
        return true;
      }
  
       set.add(str[i]);
      }
    }
    
    return false;
  }
for (let i = 0; i < lines.length; i++) {
    const element = lines[i].split("\r")[0];
    if (element.length == Length) {
        let count = 0
        for (let j = 0; j < element.length; j++) {
            if (letter.includes(element[j])) {
                count++
            }
        }
        // check if the word is only made up of the letters in the word
        if (count === element.length) {
            console.log(element);

        }
    }
}