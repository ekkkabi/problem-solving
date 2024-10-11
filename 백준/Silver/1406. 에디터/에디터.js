const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    const initialText = input[0].trim();
    const commandCount = Number(input[1]);

    let leftStack = initialText.split('');
    let rightStack = [];

    for (let i = 2; i < commandCount + 2; i++) {
        const [command, char] = input[i].trim().split(' ');

        switch (command) {
            case 'L':
                if (leftStack.length > 0) {
                    rightStack.push(leftStack.pop());
                }
                break;
            case 'D':
                if (rightStack.length > 0) {
                    leftStack.push(rightStack.pop());
                }
                break;
            case 'B':
                if (leftStack.length > 0) {
                    leftStack.pop();
                }
                break;
            case 'P':
                leftStack.push(char);
                break;
        }
    }

    return leftStack.join('') + rightStack.reverse().join('');
}

console.log(solution(input));
