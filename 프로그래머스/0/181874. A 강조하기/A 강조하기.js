function solution(myString) {
    let answer = '';
    for (let ele of myString){
        if(ele === 'A' || ele === 'a')
            answer += ele.toUpperCase();
        else
            answer += ele.toLowerCase();
    }
    return answer;
}