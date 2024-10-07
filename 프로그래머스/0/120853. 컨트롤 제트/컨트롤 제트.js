function solution(s) {
    var answer = 0;
    let numArr = s.split(' ');
    for(let i = 0; i<numArr.length; i++){
        if(numArr[i]==='Z')
            answer -= Number(numArr[i-1]);
        else
            answer += Number(numArr[i]);
    }
    return answer;
}