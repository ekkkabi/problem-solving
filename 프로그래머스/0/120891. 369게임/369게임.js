function solution(order) {
    let arr = order.toString().split('').map(Number);
    let answer = arr.filter((ele) => ele === 3 || ele === 6 || ele === 9);
    return answer.length;
}