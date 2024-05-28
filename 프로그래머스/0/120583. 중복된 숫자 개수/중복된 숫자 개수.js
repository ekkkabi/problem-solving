function solution(array, n) {
    let count = array.filter((ele) => ele === n).length;
    return count;
}