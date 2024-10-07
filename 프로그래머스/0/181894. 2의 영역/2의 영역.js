function solution(arr) {
    let answer = arr;
    
    if(!answer.includes(2))
        return [-1];
    
    let firstIdx = answer.indexOf(2);
    let finalIdx = answer.lastIndexOf(2);
    if(firstIdx === finalIdx)
        answer = [2];
    else
        answer = answer.slice(firstIdx, finalIdx+1);    
    return answer;
}