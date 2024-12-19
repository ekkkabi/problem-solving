function solution(babbling) {
    let count = 0
    let say = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i<babbling.length; i++){
        let word = babbling[i];
        
        let tmp = word
        for (let s of say){
            tmp = tmp.replace(s, ' ')
        }
        
        if(tmp.trim() == '')
            count += 1
    }

    return count;
}