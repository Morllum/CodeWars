// function lastSurvivor(letters, coords){
//     let newStr = letters; 
//     // console.log(newStr)
//     for (let c of coords){
//         console.log(`remove ${newStr[c]}`)
//         newStr = newStr.substring(0, c) + newStr.substring(c+1); 
//         console.log(c)
//         console.log(newStr) 
//     }  
// }

// lastSurvivor("foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr", 
// [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1])

// lastSurvivor("abcagf", [1,1,3,3,2])

// str = "q121"
// console.log(str.substring(0,2)+ str.substring(2+1)); 

// function getCount(str){
//     const vowels = "aeiou"; 
//     count = 0; 
//     for (let letter of str){
//         if (vowels.includes(letter)){
//             count++
//         }
//     } return count
// }

// console.log(getCount("dsaadfef"))

// var isSquare = function(n){
//     const ans = Math.pow(n, 1/2) 
//     if (ans%1 === 0 || n === 0){
//       return true;
//     }else {return false}
//   }

function getMiddle(s)
{
  if (s.length%2 !== 0){
    return s[Math.ceil(s.length/2-1)]
  }else {return s[s.length/2-1] + s[s.length/2]}
}

console.log(getMiddle("hiag"))