function solution(n) {
    var answer = [];
    for(let i = 4; i<=n; i++){
        let arr = [];
        for(let j = 1; j<=i; j++){
            if(i%j===0)
                arr.push(j);
            if(arr.length >= 3){
                answer.push(i);
                break;
            }
        }
    }
    return answer.length;
}