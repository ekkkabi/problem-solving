function solution(my_str, n) {
    var answer = [];
    for(let i = 0; i<my_str.length; i+=n){
        let sliceStr = my_str.slice(i, i+n);
        answer.push(sliceStr);
    }
    return answer;
}