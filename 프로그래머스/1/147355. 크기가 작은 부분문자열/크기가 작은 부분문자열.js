function solution(t, p) {
    var answer = 0;
    let p_length = p.length;
    for(let i = 0; i<t.length; i++){
        let num = t.slice(i, i+p_length);
        console.log(num)
        if(num.length === p_length && Number(num) <= Number(p))
            answer += 1;
    }
    return answer;
}