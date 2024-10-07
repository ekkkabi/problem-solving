const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let score = 0;

    let count = 0;
    let gradeArr = [];
    let scoreArr = [];

    for (let val of input) {
        let strArr = val.split(' ');
        gradeArr.push(Number(strArr[1]));
        scoreArr.push(strArr[2].slice(0, 2));
    }

    for (let i = 0; i < gradeArr.length; i++) {
        if (scoreArr[i] === 'P') continue;

        switch (scoreArr[i]) {
            case 'A+':
                score += 4.5 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'A0':
                score += 4.0 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'B+':
                score += 3.5 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'B0':
                score += 3.0 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'C+':
                score += 2.5 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'C0':
                score += 2.0 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'D+':
                score += 1.5 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'D0':
                score += 1.0 * gradeArr[i];
                count += gradeArr[i];
                break;
            case 'F':
                count += gradeArr[i];
                break;
            default:
                break;
        }
    }

    let answer = count !== 0 ? score / count : score;

    return answer.toFixed(6);
}

console.log(solution(input));
