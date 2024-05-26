/**
 * < 문제 >
 * 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어진다.
 * 이때 모든 알파벳을 오름차순으로 정렬해 이어처 출력 후,
 * 그 뒤에 모든 숫자들을 더한 값을 이어 출력한다.
 * ex1. K1KA5CB7 ----> ABCKK13
 * ex2. AJKDLSI412K4JSJ9D -----> ADDIJJJKKLSS20
 *
 * < 입력조건 >
 * 첫째 줄에 하나의 문자열 S 가 주어진다. (1<=S 의 길이<=10,000)
 *
 * < 출력 조건 >
 * 첫째 줄에 문제에서 요구하는 정답을 출력한다.
 *
 */

let input = 'K1KA5CB7';
let str = '';
let number = 0;

for (let i = 0; i < input.length; i++) {
    let ele = input[i];
    if (!isNaN(ele)) number += Number(ele);
    else str += ele;
}

let tmp = str.split('').sort().join('');
console.log(tmp + String(number));
