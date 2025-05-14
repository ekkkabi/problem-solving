function solution(lines) {
    let maps = new Array(201).fill(0)
    for (let line of lines){
        let [s, e] = line;
        for (let i = s; i<e; i++){
            maps[i+100] += 1
        }
    }
    
    let answer = 0
    for(let cnt of maps){
        if (cnt > 1)
            answer += 1
    }
    return answer
}