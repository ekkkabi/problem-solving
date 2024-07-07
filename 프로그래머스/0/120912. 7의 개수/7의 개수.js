function solution(array) {
    let arr = array.join('').split('').map(Number).filter((ele) => ele === 7);
    return arr.length;
}