function solution(X, Y) {
    var answer = [];
    
    let firstDict = {};
    for(let ch of X){
        if(!(ch in firstDict)){
            firstDict[ch] = 1;
        }
        else{
            firstDict[ch] += 1;
        }
    }
    
    let secondDict = {};
    for(let ch of Y){
        if(!(ch in secondDict)){
            secondDict[ch] = 1;
        }
        else{
            secondDict[ch] += 1;
        }
    }
    
    let common = new Set();
    for (let num of new Set(X)){
        if(Y.includes(num)){
            common.add(num);
        }
    }
    
    common = [...common].sort((a,b) => b-a);
    for(let n of common){
        let count = firstDict[n] < secondDict[n] ? firstDict[n] : secondDict[n];
        
        for(let i=0; i<count; i++){
            answer.push(n)
        }
    }

    const sum = answer.map((ele) => Number(ele)).reduce((acc, cur) => acc + cur, 0);
    if (sum === 0 && answer.length > 0){
        return "0"
    }
        
    return answer.length === 0 ? "-1" : answer.sort((a,b) => b-a).join('');
}