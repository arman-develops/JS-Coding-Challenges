//challenge 1: sum of two numbers
function addition (num1, num2) {
    return num1 + num2;
}

// console.log(addition(3, 5)); //8
// console.log(addition(-6, 9)); //3

//challenge 2: convert minutes into seconds
function convert (minutes) {
    return minutes * 60;
}
// console.log(convert(5)); //300
// console.log(convert(2)); //120

//challenge 3: Perimeter of a rectangle
function findPerimeter(length, width) {
    return 2 * (length + width);
}
// console.log(findPerimeter(6, 7)); //26
// console.log(findPerimeter(20, 10)); //60

//challenge 4: Check negative
function isNegative(number) {
    if(number < 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isNegative(-23)); //23
// console.log(isNegative(55)); //55

//challenge 5: Can I drive
function canDrive(name, age) {
    if(age > 18) {
        console.log(`${name} is old enough to drive`);
    } else {
        console.log(`${name} is not old enough to drive yet`);
    }
}
canDrive("Jane", 22); //Jane is old enough to drive
canDrive("June", 12); //June is not old enough to drive yet