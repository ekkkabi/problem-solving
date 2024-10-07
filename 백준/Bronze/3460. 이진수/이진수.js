const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let t = Number(input[0]);
    let numArr = input.slice(1, t + 1).map(Number);

    let answer = [];

    // 2 진수 변환
    for (let num of numArr) {
        let q = num,
            arr = [];
        while (q > 0) {
            let r = q % 2;
            arr.push(r);
            q = parseInt(q / 2);
        }
        answer.push(arr);
    }

    let idxArr = [];
    for (let val of answer) {
        let idxLst = [];
        for (let i = 0; i < val.length; i++) {
            if (val[i] === 1) idxLst.push(i);
        }
        idxArr.push(idxLst);
    }

    let solution = [];
    for (let ele of idxArr) {
        let tmp = [];
        for (let i = 0; i < ele.length; i++) {
            tmp.push(ele[i]);
            tmp.push(' ');
        }
        tmp.pop();
        tmp.push('\n');
        solution.push(tmp);
    }

    return idxArr.map((ele) => ele.join(' ')).join('\n');
}

console.log(solution(input));
