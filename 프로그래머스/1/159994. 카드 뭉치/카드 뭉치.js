function solution(cards1, cards2, goal) {
    let top1 = 0;
    let top2 = 0;
    let gTop = 0
    
    while (gTop < goal.length){
        if(top1 < cards1.length & cards1[top1] == goal[gTop]){
            top1 += 1
        }
        else if(top2 < cards2.length & cards2[top2] == goal[gTop]){
            top2 += 1
        }
        else{
            return "No"            
        }
        gTop += 1
    }
    return "Yes";
}