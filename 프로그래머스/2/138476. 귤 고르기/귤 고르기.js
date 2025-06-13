function solution(k, tangerine) {
    var answer = 0;
    
    let kind = new Map();
    for(let t of tangerine){
        if(kind.has(t)){
            kind.set(t, kind.get(t)+1)
        }
        else{
            kind.set(t, 1)
        }
    }
    
    let sortKind = new Map([...kind.entries()].sort((a,b) => b[1] - a[1]))
    let total = 0
    for (let nums of sortKind){
        let [kind, cnt] = nums
        total += cnt
        answer ++;
        if(total >= k){
            break;
        }
    }
    
    return answer;
}