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

//Challenge 5: Count Properties
function countProperties(obj) {
    let count = 0;
    for (let i = 0; i < Object.keys(obj).length; i++) {
        count += i;
    }
    return count;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

// Challenge 6: Filter By Length
function filterByLength(arr, len) {
    let filteredArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= len) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
// console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numArray) {
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] % 2 == 0) {
            sum += numArray[i];
        }
    }
    return sum;
}
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Challenge 8: Difference between the sum of even and odd numbers
function differenceEvenOdd(numArray) {
    let evenTotal = 0, oddTotal = 0;
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] % 2 == 0) {
            evenTotal += numArray[i];
        }else {
            oddTotal += numArray[i];
        }
    }
    return evenTotal - oddTotal;
}
// console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));

// Challenge 9: Count Truthy
function countTruthy(obj) {
    let count = 0
    for(let i = 0; i < Object.values(obj).length; i++) {
        if(Object.values(obj)[i]) {
            count += 1
        }
    }
    return count;
}
// console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

// Challenge 10: Average of Numbers
function average(numArray) {
    let sum = 0, len = numArray.length;
    if(len === 0) {
        return 0;
    } else {
        for(let i = 0; i < len; i++) {
            sum += numArray[i];
        }
    }
    
    return sum / len;
}
// console.log(average([2, 4, 6, 8]));
// console.log(average([]));

// Challenge 11: Linear Search
function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// console.log(linearSearch([5, 3, 7, 1, 4], 7));
// console.log(linearSearch([5, 3, 7, 1, 4], 10));

// Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr, val) {
    for(let i = arr.length -1 ; i >= 0; i--) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
// console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr, val) {
    let indices = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            indices.push(i);
        }
    }
    return indices;
}
// console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
// console.log(linearSearchAll([5, 3, 7, 1, 4], 10));
