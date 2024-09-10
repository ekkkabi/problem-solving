const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let arr = input.map(Number).sort((a, b) => a - b);
    let allSum = arr.reduce((curr, acc) => acc + curr);

    let selectArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length ; j++) {
            let sum = arr[i] + arr[j];
            if (allSum - sum === 100) selectArr.push(arr[i], arr[j]);
        }
    }
    
    let filterArr = arr.filter((ele) => ele !== selectArr[0] && ele !== selectArr[1])

    return filterArr.join('\n');
}

console.log(solution(input));
