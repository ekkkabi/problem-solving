const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    let stack = input.slice();
    let arr = [];

    if (!stack.includes('<')) {
        let lst = stack.join('').split(' ');
        for (let val of lst) {
            let str = val.split('').reverse().join('');
            arr.push(str);
            arr.push(' ');
        }
        arr.pop();

        return arr.join('');
    }

    for (let i = 0; i < stack.length; i++) {
        let tagArr = [];
        let strArr = [];

        if (stack[i] === '<') {
            while (stack[i] !== '>' && i < stack.length) {
                tagArr.push(stack[i]);
                i += 1;
            }
            if (stack[i] === '>' && i < stack.length) {
                tagArr.push(stack[i]);
            }
            arr.push(tagArr.join(''));
        } else {
            while (stack[i] !== '<' && stack[i] !== ' ' && i < stack.length) {
                strArr.push(stack[i]);
                i += 1;
            }
            strArr.reverse();
            if (stack[i] === ' ') {
                strArr.push(stack[i]);
            }
            if (stack[i] === '<' && i < stack.length) i -= 1;

            arr.push(strArr.join(''));
        }
    }

    return arr.join('');
}

console.log(solution(input));
