function solution(N, stages) {    
    let sort_stages = stages.sort((a,b) => a-b);
    let set_stages = new Set(stages);
    
    let dict = {};
    let total = stages.length;

    for(let num = 1; num<=N; num++){
        if(!stages.includes(num)){
            dict[num] = 0
        }
        else{
            let firstIdx = sort_stages.indexOf(num);     
            let lastIdx = sort_stages.lastIndexOf(num);
            dict[num] = (lastIdx - firstIdx + 1) / (stages.length - lastIdx - 1)
        }
    }
    
    let answer = Object.keys(dict).sort((a,b) => dict[b] - dict[a]).map((ele) => Number(ele));
    
    return answer;
}