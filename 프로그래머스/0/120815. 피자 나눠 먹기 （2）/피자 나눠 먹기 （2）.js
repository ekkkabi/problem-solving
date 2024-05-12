function solution(n) {
    // n 과 6의 최소공배수를 구해 -> 나누기 6
    let lcm = (n * 6) / gcd(n, 6);
    return lcm / 6;    
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}