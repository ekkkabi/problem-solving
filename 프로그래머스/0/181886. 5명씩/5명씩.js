function solution(names) {
    let rst = [];
    let answer = []
    for(let i = 0; i<names.length; i += 5){
        let tmp = names.slice(i, i+5);
        rst.push(tmp);
    }
    for(let i = 0; i<rst.length; i++){
        answer.push(rst[i][0]);
    }
    return answer;
}