function solution(n) {
    var answer = new Set();
    
    let i = 2;
    while(n>=2){
        if(n % i == 0){
            n /= i;
            answer.add(i);
        }else
            i += 1;
    }
    
    return [...answer].sort((a,b) => a-b);
}