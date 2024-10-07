function solution(num_list) {
    let answer = num_list.length < 11 ? 1 : 0;
    if(num_list.length < 11){
        num_list.map((ele, idx) => answer *= ele);
    }else{
        num_list.map((ele, idx) => answer += ele);
    }
    return answer;
}