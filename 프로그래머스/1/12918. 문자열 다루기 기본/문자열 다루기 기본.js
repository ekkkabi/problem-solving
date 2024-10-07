function solution(s) {
    let nums = '0123456789'
    if(s.length !== 4 && s.length !== 6)
        return false;
    for(let i = 0; i<s.length; i++){
        if(!nums.includes(s[i]))
            return false;
    }
    return true;
}