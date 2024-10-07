function solution(s1, s2) {
    let count = 0;
    for(let ele of s1){
        if(s2.includes(ele))
            count+=1;
    }
    return count;
}