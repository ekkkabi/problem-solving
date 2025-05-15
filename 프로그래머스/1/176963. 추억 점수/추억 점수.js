function solution(name, yearning, photo) {
    var answer = [];
    
    let dic = {}
    for (let i = 0; i<name.length; i++){
        dic[name[i]] = yearning[i]
    }
    
    for (let arr of photo){
        let total = 0
        for (let name of arr){
            if(name in dic){
                total += dic[name]
            }            
        }
        answer.push(total)
    }
    
    return answer;
}