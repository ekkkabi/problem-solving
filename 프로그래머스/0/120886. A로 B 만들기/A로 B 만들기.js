function solution(before, after) {    
    let before_sets = new Map();
    let after_sets = new Map()
    
    for(let i of before){
        if(before_sets.get(i) === undefined)
            before_sets.set(i, 1);
        else
            before_sets.set(i, before_sets.get(i) + 1);
    }
    
    for(let i of after){
        if(after_sets.get(i) === undefined)
            after_sets.set(i, 1);
        else
         after_sets.set(i, after_sets.get(i) + 1);
    }
    
    before_sets = new Map([...before_sets.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    after_sets = new Map([...after_sets.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    
    for (let [key, value] of before_sets) {
        if (after_sets.get(key) !== value) {
            return 0;
        }
    }
    
    return 1;
}