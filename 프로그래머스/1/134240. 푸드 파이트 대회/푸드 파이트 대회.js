function solution(food) {
    var answer = '';
    let lst = [];
    for(let i = 1; i < food.length; i++){
        q = parseInt(food[i]/2)
        if (q == 0)
            continue
        else{
            lst.push(...Array(q).fill(i));
        }
    }
    return lst.join('') + '0' + lst.reverse().join('');
}