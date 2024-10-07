const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, m] = input[0].split(' ').map(Number);
    let bulbs = input[1].split(' ').map(Number);
    let action = input.slice(2, 2 + m).map((ele) => ele.split(' ').map(Number));

    for (let i = 0; i < m; i++) {
        let [command, start, end] = action[i];
        start -= 1;
        end -= 1;

        switch (command) {
            case 1:
                bulbs[start] = end + 1;
                break;
            case 2:
                for (let j = start; j < end + 1; j++) {
                    bulbs[j] = bulbs[j] === 0 ? 1 : 0;
                }
                break;
            case 3:
                bulbs.fill(0, start, end + 1);
                break;
            case 4:
                bulbs.fill(1, start, end + 1);
                break;
        }
    }

    return bulbs.join(' ');
}

console.log(solution(input));
