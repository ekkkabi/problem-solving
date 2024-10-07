function solution(myString) {
    let tmp = myString.split('x');
    tmp = tmp.filter((ele) => ele !=- '');
    return tmp.sort();
}