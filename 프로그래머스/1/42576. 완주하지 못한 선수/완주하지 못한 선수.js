function solution(participant, completion) {
    let maps = {};
    for(let name of participant){
        if(maps[name])
            maps[name] += 1;
        else
            maps[name] = 1;
    }
    
    for(let name of completion){
        maps[name] -= 1;
    }
    
    for (let name in maps){
        if(maps[name] > 0)
            return name;
    }
}