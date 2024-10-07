function solution(array) {
    let objs = {};
    
    for (let val of array){
        if(objs[val] === undefined)
            objs[val] = 1;
        else
            objs[val]++;  
    }
    
    let max_value = Math.max(...Object.values(objs));
    let answer = Object.keys(objs).filter((key) => objs[key] === max_value);
    return answer.length > 1 ? -1 : Number(answer[0]);
}