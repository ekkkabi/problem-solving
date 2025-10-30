function solution(n=8, m=4, section=[2,3,6]) {
    var answer = 0;
    let nums = Array.from(new Array(n), (x, i) => i+1);
    
    let colored = new Set();
    for(let i = 0; i<section.length; i++){
        if(colored.has(section[i])) continue;
        for(let j = section[i]; j< section[i]+m; j++){
            colored.add(j)
        }
        answer += 1;
    }
    
    return answer;
}