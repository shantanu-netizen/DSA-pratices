//Reverse a string
function reverseStr(str) {
    return str.split('').reverse().join('');
}
let str = "GOLU";
console.log(reverseStr(str));

//Count vowels and consonants in a string
function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = 'aeiouAEIOU';  
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantsCount++;
        }
    }
    return { vowels: vowelsCount, consonants: consonantsCount };
}
let inputStr = "Hello World";
let counts = countVowelsAndConsonants(inputStr);
console.log(`Vowels: ${counts.vowels}, Consonants: ${counts.consonants}`);

function uniqScore(score) {
    let uniqScore = Array.from(new Set(score))
       uniqScore.sort((a,b)=>a-b)
        let uniqsmall = uniqScore[1]
        let uniqlarge=uniqScore[uniqScore.length-2]
    
    return(uniqsmall,uniqlarge)
}
let num2 = [50, 20, 70, 90, 20, 100, 50]
let scores = uniqScore(num2)
console.log(scores)

function parcel(weights) {
    let minWeight = weights[0]
    for (let i = 1; 1 < weights.length; i++){
        if (weights[i] < minWeight) {
            minWeight=weights[i]
        }
    }
    return minWeight
}
let weights = [450, 200, 350, 150, 40]
let mini = parcel(weights)
console.log(mini)