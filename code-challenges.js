// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


var fib = [0, 1];

// i want to loop throught the index in the array
       for (var i=fib.length; i < 11; i++) {

// i put the formula in
        fib[i] = fib[i-2] + fib[i-1];
    }

// shaaabang and console log that lil fibonacci!!!!!!!!
    console.log(fib);

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest



// THIS WAS AWSOME!!! I GO THE NUMBERS IN THROOUGH THE FUNCTION. 
// BUT UNFORTUNALTRLY I CAN T SORT IT. I TAKE IT BACK!!!!Q!! I CAN SORT!!!!!!!!!!!!!!
// BECAUSE I HAVE SPENT LIKE 10 HOURS ON THIS PROBLEM AND THE SHOW MUST GO ON



var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 9, 7, 199]

fullArr1.sort();

function filterArr(fullArr1) {
    var onlyNums = [];
    for (var i = 0; i < fullArr1.length; i++) {
        if (typeof fullArr1[i] === "number" && fullArr1[i] % 2 === 1 | fullArr1[i] % 2 === -1) {
            onlyNums.push(fullArr1[i]);
        }
    }
     
    return onlyNums;
}
console.log(filterArr(fullArr1));


var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

fullArr2.sort();

function filterArr2(fullArr2) {
    var onlyNums2 = [];
    for (var i = 0; i < fullArr2.length; i++) {
        if (typeof fullArr2[i] === "number" && fullArr2[i] % 2 === 1 || fullArr2[i] % 2 === -1) {
            onlyNums2.push(fullArr2[i]);
        }
    }
     
    return onlyNums2;
}
console.log(filterArr2(fullArr2));



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello";
// Expected output: “l”
var middleLetters2 = "rhinoceros";
// Expected output: “oc”


// I AM A LITTLE RUSTY ON A FUNCTION HERE


// NOW LETS PICK OUT THE MIDDLE

function middle(arr){
        if (middleLetters1[i] % 2 === 1){
            return middleLetters1[3];
        } 
        if (middleLetters2[i] % 2 === 0){
            return middleLetters2[4, 5];
        }
    }


console.log(middleLetters1[3]);
console.log(middleLetters2[4], middleLetters2[5])


// // --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
// // I DONT KNOW WHAT I AM DOING IN THIS EXERCISE
// import React, { Component } from 'react'

// class Sphere extends Component {
//   constructor(){
//     super()
//       this.state = {
//         sides: 4
//         pi: Math.PI
//         rad: num * num
//     }
//   }

//   handleChange = () => {
//     let newShere1 = this.state.sides * this.state.pi * this.state.rad
//     this.setState({ newShere1: newRad })
//   }

//   render() {
//     let { rad } = this.state

//     return (
//       <div>
//         <h2>Sphere: { rad }</h2>
//       </div>
//     )
//   }
// }

// export default Sphere

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = [];
// Expected output: []

function accSumm(array){
    var output = [array[0]];
    var last = array[0];
    for (i = 1; i < array.length; i++) {
        last = last + array[i];
        output.push(last);
    }
    
    return output;
}
console.log(accSumm(numbersToAdd1));
console.log(accSumm(numbersToAdd2));
console.log(accSumm(numbersToAdd3));