function solution(rank, attendance) {
    let answer = [rank, attendance];
    let sets = {};
    
    for (let j = 0; j < rank.length; j++) {
        if (attendance[j] === true) {
            sets[rank[j]] = j;
        }
    }
    
    let lst = Object.values(sets);
    let a = Number(lst[0]);
    let b = Number(lst[1]);
    let c = Number(lst[2]);
    
    return (10000 * a + 100 * b + c);
}