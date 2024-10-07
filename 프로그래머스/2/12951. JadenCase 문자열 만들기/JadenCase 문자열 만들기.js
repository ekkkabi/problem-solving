function solution(s) {
    let answer = '';
    let tmp = s.split(' ');
    for(let i = 0; i<tmp.length; i++){
        answer += ' ';
        for(let j = 0; j<tmp[i].length; j++){
            if(j===0)
                answer += tmp[i][j].toUpperCase();
            else
                answer += tmp[i][j].toLowerCase();
        }
    }
    return answer.slice(1,answer.length);
}