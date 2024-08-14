function solution(A, B) {
    var count = 0;
    while(A !== B){
        A = A.split('');
        A = A.pop() + A.join('');
        count += 1;
        
        if(count > A.length)
            return -1;
    }
    return count;
}