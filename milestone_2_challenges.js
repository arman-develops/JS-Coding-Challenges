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
