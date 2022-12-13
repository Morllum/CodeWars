// function solution(number) {
//     let total = 0;
//     for (i = 1; i < number; i++) {
//         if (i % 3 === 0) {
//             total += i;
//         } else if (i % 5 === 0) {
//             total += i;
//         }
//     } return total
// }

// console.log(solution(10))

// function moveZeros(arr) {
//     for (let each of arr) {
//         if (each === 0) {
//             arr.splice(arr.indexOf(0), 1);
//             arr.push(0);
//         }
//     } return arr
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))

function pigIt(str) {
    let newStr = ""
    let splitString = str.split(" ");
    var regExp = /[a-zA-Z]/;
    console.log(splitString)
    for (let word of splitString) {
        if (regExp.test(word)) {
            newStr += word.slice(1) + word[0] + "ay" + " ";
        } else { newStr += word }
    } return newStr.trimEnd()
}

console.log(pigIt('Pig latin is cool')); 
