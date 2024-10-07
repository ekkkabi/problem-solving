function solution(my_strings, parts) {
    let answer = ''
    for(let i = 0; i<parts.length; i++){
        let s = parts[i][0];
        let e = parts[i][1];
        answer += my_strings[i].slice(s,e+1);
    }
    return answer;
}