function solution(s) {
    let answer = '';
    let str = s.split(' ');
    for(let i = 0; i<str.length; i++){
        let arr = [];
        for(let j = 0; j<str[i].length; j++){
            if (j%2 === 0)
                arr.push(str[i][j].toUpperCase());
            else
                arr.push(str[i][j].toLowerCase());
        }
        answer += arr.join('');
        if(i<str.length-1){
            answer += ' ';
        }
    }
    return answer;
}