const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let S = Number(input);

function solution(S) {
  let sum = 0;
  for(let i = 1; ; i++){
      sum += i;
      if(sum>S)
          return i-1;
  }
}
console.log(solution(S));