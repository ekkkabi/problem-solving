const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [A, B, C] = input[0].split(' ').map(BigInt);

    function powerMod(A, B, C) {
        if (B === BigInt(0)) return BigInt(1);
        if (B === BigInt(1)) return A % C;

        let result = powerMod(A, B / BigInt(2), C);
        result = (result * result) % C;

        if (B % BigInt(2) === BigInt(1)) return (result * A) % C;

        return result;
    }

    return powerMod(A, B, C).toString();
}

console.log(solution(input));
