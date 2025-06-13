function solution(players, callings) {
    let result = new Map();
    let i = 0;
    for(let p of players){
        result.set(p, i);
        i++;
    }
    
    for(let name of callings){
        let callingIdx = result.get(name)
        let swapName = players[callingIdx-1];
        
        players[callingIdx] = swapName;
        players[callingIdx - 1] = name;
        
        result.set(name, callingIdx - 1);
        result.set(swapName, callingIdx);

    }  
    
    return players;
}