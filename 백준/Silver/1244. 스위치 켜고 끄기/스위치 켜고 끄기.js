const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let count = Number(input[0]);
    let switchs = input[1].split(' ').map(Number);
    let students = input.slice(3, 3 + Number(input[2])).map((ele) => ele.split(' ').map(Number));

    for (let i of students) {
        let [gender, num] = i;
        switch (gender) {
            case 1:
                for (let j = num; j <= count; j += num) {
                    switchs[j - 1] = switchs[j - 1] === 0 ? 1 : 0;
                }
                break;
            case 2:
                let left = num - 2;
                let right = num;
                switchs[num - 1] = switchs[num - 1] === 0 ? 1 : 0;
                while (left >= 0 && right < count && switchs[left] === switchs[right]) {
                    switchs[left] = switchs[left] === 0 ? 1 : 0;
                    switchs[right] = switchs[right] === 0 ? 1 : 0;
                    left--;
                    right++;
                }
                break;
        }
    }

    let result = [];
    for (let i = 0; i < switchs.length; i += 20) {
        result.push(switchs.slice(i, i + 20).join(' '));
    }

    return result.join('\n');
}

console.log(solution(input));
