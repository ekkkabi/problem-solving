function solution(sizes) {
    let max = Math.max(...sizes.flat());
    let target = [];
    
    for (let i = 0; i<sizes.length; i++){
        let big = Math.max(...sizes[i]);
        if(big === sizes[i][0])
            target.push(sizes[i][1])
        else
            target.push(sizes[i][0])
    }
    
    return max*Math.max(...target);
}