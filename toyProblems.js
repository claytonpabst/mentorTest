//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  // reverseIt:

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  reverseIt(str){
    return str.split('').reverse().join('')
  },

  // removeDups:

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates
  removeDups(arr){
    let unique = []
    for(let i=0; i<arr.length; i++){
      if(!unique.includes(arr[i])){
        unique.push(arr[i])
      }
    }
    return unique;
  },

  // titleIt:

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word
  titleIt(str){
    str = str.split(' ')
    capStr = []
    for(let i=0; i<str.length; i++){
      capStr.push(str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase())
    }
    return capStr.join(' ')
  },

  // vowelCounter:

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string
vowelCounter(str){
  str = str.toLowerCase()
  let numberOfVowels = 0
  for(let i=0; i<str.length; i++){
    switch(str[i]){
      case 'a':
        numberOfVowels++;
        break;
      case 'e':
        numberOfVowels++;
        break;
      case 'i':
        numberOfVowels++;
        break;
      case 'o':
        numberOfVowels++;
        break;
      case 'u':
        numberOfVowels++;
        break;

      default:
        break;
    }
  }
  return numberOfVowels;
},

  // isPrime:

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not
  isPrime(num){
    if(num<0){return false}
    for(let i=2; i<num; i++){
      if(num % i === 0){return false}
    }
    return num !== 1;
  },

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined,
}
