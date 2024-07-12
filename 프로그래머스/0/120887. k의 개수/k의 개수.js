function solution(i, j, k) {
    let arr = []
    for(let x= i; x<=j; x++){
        arr.push(x);
    }
    let numArr = arr.join('').split('').map(Number);
    let answer = numArr.filter((ele) => ele === k);
    return answer.length;
}