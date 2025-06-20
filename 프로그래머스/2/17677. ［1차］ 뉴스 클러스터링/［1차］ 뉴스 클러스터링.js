function convertSets(str){
    let sets = [];
    for(let i = 0; i<str.length-1; i++){
        let s = str[i] + str[i+1]
        
        if (/^[A-Za-z]{2}$/.test(s))
            sets.push(s)
    }
    return sets;
}

function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    let sets_str1 = convertSets(str1);
    let sets_str2 = convertSets(str2);
    
    let maps_str1 = new Map();
    for(let ele of sets_str1){
        maps_str1.set(ele, (maps_str1.get(ele) || 0) + 1);
    }
    
    let maps_str2 = new Map();
    for(let ele of sets_str2){
        maps_str2.set(ele, (maps_str2.get(ele) || 0) + 1);
    }
    
    let lst = new Set();
    let inter = 0;
    let union = 0
    for(let [key, val] of maps_str1.entries()){
        if(maps_str2.has(key)){
            inter += Math.min(val, maps_str2.get(key));
            union += Math.max(val, maps_str2.get(key));
        } else {
            union += val;
        }
        lst.add(key);
    }
    for(let [key, val] of maps_str2.entries()){
        if(!lst.has(key)){
            union += val;
        }
    }
    
    if(union === 0)
        return 65536;
    
    return Math.floor((inter / union) * 65536);
}