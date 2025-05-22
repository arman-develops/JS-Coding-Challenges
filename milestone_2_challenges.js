// Challenge 1: Sum Of Positives
function sumOfPositives(numArray) {
    let total = 0;
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > 0) {
            total = total + numArray[i]
        }
    }
    return total;
}
// console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

// Challenge 2: FInd Maximum Value
function findMax(numArray) {
    let max = 0;
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > numArray[i + 1]) {
            max = numArray[i];
        }
    }
    return max;
}
// console.log(findMax([3, 7, 2, 9, 5]));

// Challenge 3: Election Winner
function findWinner(objArray) {
    let winner = objArray[0];
    for(let i = 0; i < objArray.length; i++) {
        if(objArray[i].votes > winner.votes) {
            winner = objArray[i];
        }
    }
    return winner;
}
// const candidates = [
//     { name: "Alice", votes: 50 },
//     { name: "Bob", votes: 75 },
//     { name: "Charlie", votes: 65 }
// ];
// console.log(findWinner(candidates));

// Challenge 4: Longest Word
function findLongestWord(wordArray) {
    let longestWord = wordArray[0]
    for(let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length){
            longestWord = wordArray[i];
        }
    }
    return longestWord;
}
// console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
