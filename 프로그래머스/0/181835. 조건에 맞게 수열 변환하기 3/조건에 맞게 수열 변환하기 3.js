function solution(arr, k) {
    let answer = [];
    let isOdd = (k % 2 !== 0) ? true : false;
    if(isOdd)
        answer = arr.map((ele) => ele * k);
    else
        answer = arr.map((ele) => ele + k);
    return answer;
}