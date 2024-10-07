const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    /**
     * 도A(배 한 개, 등1 세 개),
     * 개B(배 두 개, 등 두 개),
     * 걸C(배 세 개, 등 한 개),
     * 윷D(배 네 개),
     * 모E(등 네 개)
     */

    let arr = input.map((ele) => ele.split(' ').map(Number));
    let answer = [];
    for (let val of arr) {
        let front = val.filter((ele) => ele === 0).length;
        switch (front) {
            case 0:
                answer.push('E');
                break;
            case 1:
                answer.push('A');
                break;
            case 2:
                answer.push('B');
                break;
            case 3:
                answer.push('C');
                break;
            case 4:
                answer.push('D');
                break;
            default:
                break;
        }
    }
    return answer.join('\n');
}

console.log(solution(input));
