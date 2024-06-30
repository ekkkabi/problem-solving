function solution(myString) {
    let tmp = myString.split('x');
    return tmp.map((ele) => ele.length);
}