function solution(slice, n) {
    if(slice > n){
        return 1;
    }else{
        let q = parseInt(n/slice);
        let r = n % slice;
        if(r !== 0)
            return q + 1;           
        else
            return q
    }
}
console.log(solution(4, 12))