function solution(my_string, queries) {
    let answer = my_string;
    for(let i = 0; i<queries.length; i++){
        let s = queries[i][0];
        let e = queries[i][1];
        
        answer = answer.slice(0,s) + answer.slice(s,e+1).split('').reverse().join('') +  answer.slice(e+1);
    }
    return answer;
}

console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]))