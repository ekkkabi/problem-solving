function solution(my_string) {
    var answer = 0;
    for(let ele of my_string){
        if(!isNaN(Number(ele)))
            answer += Number(ele);
    }
    return answer;
}