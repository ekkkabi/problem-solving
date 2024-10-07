function solution(my_string) {
    var answer = '';
    let isDup = '';
    for(let ele of my_string){
        if(!isDup.includes(ele)){
            answer += ele;
            isDup += ele;
        }
    }
    return answer;
}