function solution(strings, n) {
    var answer = [];
    
    let str = new Set();
    for(let word of strings){
        str.add(word[n]);        
    }
    let order = [...str].sort();
    
    for(let ele of order){
        let targets = strings.filter((item) => item[n] === ele).sort()
        answer.push(targets)
    }
    
    return answer.flat(Infinity);
}