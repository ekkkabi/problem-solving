const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

function solution(input) {
    // 끊어진 기타줄 개수 n
    // 기타줄 브랜드 M 개
    let n = parseInt(input[0]);
    let m = parseInt(input[1]);

    let arr = input.slice(2).join(' ').split(' ').map(Number);
    let lst = [],
        tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            tmp.push(arr[i]);
            tmp = [];
        } else {
            tmp.push(arr[i]);
            lst.push(tmp);
        }
    }

    let packageArr = [],
        singleArr = [];

    for (let j = 0; j < lst.length; j++) {
        packageArr.push(lst[j][0]);
        singleArr.push(lst[j][1]);
    }

    let package = Math.min(...packageArr);
    let single = Math.min(...singleArr);

    let single_price = single * n;
    let package_price = n <= 6 ? package : package * (parseInt(n / 6) + 1);
    let mix_price = single * (n % 6) + package * parseInt(n / 6);

    return n <= 6
        ? Math.min(single_price, package_price)
        : Math.min(single_price, package_price, mix_price);
}

console.log(solution(input));