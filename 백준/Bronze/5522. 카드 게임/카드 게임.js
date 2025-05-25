const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = input.map((ele) => parseInt(ele)).reduce((a, b) => a + b);
console.log(answer);
