function solution(num_list) {
    let answer = 0;
    num_list.map((ele) =>{
        while(ele !== 1){
            if(ele %2 !== 0){
                ele = (parseInt(ele -1) / 2);
                answer +=1;
            }else{
                ele = parseInt(ele/2);
                answer +=1;
            }
        }
    })
    return answer;
}