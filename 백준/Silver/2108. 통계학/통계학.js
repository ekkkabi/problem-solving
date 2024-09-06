const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

function solution(input) {
    let n = input[0];
    let numArr = input.slice(1).map(Number);

    // 산술평균
    let arMean = Math.round(numArr.reduce((acc, curr) => acc + curr) / n);

    // 중앙값
    let midNum = [...numArr].sort((a, b) => a - b)[Math.floor(n / 2)];

    // 최빈값
    let modeMap = new Map();
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        if (modeMap.has(num)) modeMap.set(num, modeMap.get(num) + 1);
        else modeMap.set(num, 1);
    }

    let valuesArr = Array.from(modeMap.values());
    let valueMax = Math.max(...valuesArr);

    let keyArr = [];
    modeMap.forEach((value, key) => {
        if (value === valueMax) keyArr.push(key);
    });
    keyArr.sort((a, b) => a - b);

    let mode = keyArr.length > 1 ? keyArr[1] : keyArr[0];

    // 범위
    let range = Math.max(...numArr) - Math.min(...numArr);

    return `${arMean}\n${midNum}\n${mode}\n${range}`;
}

console.log(solution(input));
