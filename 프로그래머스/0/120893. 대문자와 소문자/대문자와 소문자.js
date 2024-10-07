function solution(my_string) {
    var answer = '';
    let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let ele of my_string){
        if(upperChar.includes(ele))
            answer += ele.toLowerCase();
        else
            answer += ele.toUpperCase();
    }
    return answer;
}