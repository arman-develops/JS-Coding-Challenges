//challenge 1: Sum Of Positives
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
