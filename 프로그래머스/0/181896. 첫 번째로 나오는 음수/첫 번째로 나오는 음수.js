function solution(num_list) {
    let answer = num_list.findIndex((ele) => ele < 0)
    return answer !== -1 ? answer : -1;
}