function solution(spell, dic) {
    for(let word of dic){
        var count = 0;
        for(let i = 0; i<spell.length; i++){
            if(!word.includes(spell[i]))
                break;
            count += 1;
            if(count === spell.length)
                return 1;
        }
    }
    return 2;
}