function solution(rsp) {
    let answer = '';
    for(let ele of rsp){
        switch(ele){
            case '2':
                answer += '0';
                break;
            case '0':
                answer += '5';
                break;
            case '5':
                answer += '2';
                break;
        }
    }
    return answer;
}