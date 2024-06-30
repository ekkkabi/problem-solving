function solution(myString, pat) {
    let tmp = myString.split('').map((ele) => ele !== 'A' ? 'A' : 'B').join('');
    return tmp.includes(pat) ? 1 : 0;
}