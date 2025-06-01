function solution(people, limit) {
    let answer = 0
    
    let [left, right] = [0, people.length-1];
    people.sort((a,b) => a-b);
    
    while(left <= right){
        
        // 혼자 탈 경우 
        if(left === right){
            answer ++;
            break;
        }
        
        // 두명 탈 경우 몸무게 초과되지 않을 경우 
        if(people[left] + people[right] <= limit){
            answer ++;
            left ++;
            right --;
        }
        // 두 명 탈 경우 몸무게 초과시, right 감소, 혼자 탐
        else{
            right --;
            answer ++;
        }
    }
    
    return answer
}
