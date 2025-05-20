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
// canDrive("Jane", 22); //Jane is old enough to drive
// canDrive("June", 12); //June is not old enough to drive yet

//challenge 6: Largest number
function findLargest(a, b, c) {
    if(a > b && a > c) {
        return a;
    }else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
// console.log(findLargest(5, 9, 3)); //9
// console.log(findLargest(10, 10, 10)); //10
// console.log(findLargest(-1, -5, -3)); //-1

//challenge 7: BMI Calculator
function calculateBMI(weight, height) {
    let BMI = weight / (height * height);
    let category = "";
    if(BMI < 18.5) {
        category = "Underweight";
    }else if (BMI > 18.5 && BMI < 24.9) {
        category = "Normal weight";
    }else if(BMI > 25 && BMI < 29.9) {
        category = "Overweight";
    }else {
        category = "Obese";
    }
    console.log(`Your BMI is ${BMI} - ${category}`);
}
// calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
// calculateBMI(85, 1.8); //Your BMI is 26.2 - Normal weight

//Challenge 8: Greetings based on time
function greetUser(name, hour) {
    let greeting = "";
    if(hour <= 11 && hour >= 5) {
        greeting = `Good morning, ${name}`;
    }else if(hour >= 12 && hour <= 17) {
        greeting = `Good afternoon, ${name}`;
    }else  if(hour >= 18 && hour <= 21) {
        greeting = `Good evening, ${name}`;
    }else if(hour <= 4 || hour >= 22) {
        greeting = `Good night, ${name}`;
    }
    console.log(greeting);
}

// greetUser("Alice", 2);

//Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
    let output = "";

    if (number % 3 === 0) {
        output += "Fizz";
    }
    if (number % 5 === 0) {
        output += "Buzz";
    }
    if(output === "") {
        output = number.toString();
    }
    console.log(output);
}

// fizzBuzzCheck(3);
// fizzBuzzCheck(10);
// fizzBuzzCheck(15);
// fizzBuzzCheck(7);

//challenge 10: Perimeter 2
function perimeter (i, number) {
    let perimeter
    switch(i) {
        case "s":
            perimeter = 4 * number;
            break;
        case "c":
            perimeter = 6.28 * number;
            break;
        default:
            return;    
    }
    return perimeter;
}

// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4));

// Challenge 11: Sum Of Even Numbers
function sumEvenNumbers(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        if(i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
// console.log(sumEvenNumbers(6));
// console.log(sumEvenNumbers(10));
// console.log(sumEvenNumbers(5));

//Challenge 12: Multiply by itself
function powerUp(num, times) {
    let result = 1;
    for(let i = 0; i < times; i++) {
        result = result * num
    }
    return result;
}

// console.log(powerUp(2, 3));
// console.log(powerUp(0));
// console.log(powerUp(5, 0));
// console.log(powerUp(3, 4));

//challenge 13: Factorial Calculator
function factorial(n) {
    if(n < 0) {
        console.log("Non-negative numbers only");
        return;
    }
    
    if(n == 0 || n == 1) {
        return 1;
    }
    
    return n * factorial(n-1);
}
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(6));


