function solution(myString, pat) {
    let answer = 0;
    for(let i = 0; i<myString.length; i++){
        let val = myString.slice(i, i+pat.length);
        if(val.includes(pat))
            answer += 1;
    }
    return answer;
}
