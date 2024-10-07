function solution(n, words) {
    let arr = [];
    let count = 1, idx = 0;
    
    for(let i = 0; i<words.length; i++){
        let start = i === 0 ? '' : words[i-1][words[i-1].length - 1];
          
        if(i > 0 && words[i][0] !== start || arr.includes(words[i])){
            idx = (i % n) + 1;
            return [idx, count]
        }
        arr.push(words[i])
        if ((i + 1) % n === 0) count += 1;  
    }
    return [0,0];
}