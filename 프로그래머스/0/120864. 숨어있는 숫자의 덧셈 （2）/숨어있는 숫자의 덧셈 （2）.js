function solution(my_string) {
    let numbers = [];
    let str = '';
    for(let ele of my_string){
        if(!isNaN(ele) && ele !== ''){
            str += ele;
        }else{
            if(str.length > 0){
                numbers.push(Number(str));
                str = '';
            }
        }
    }
    
    if(str.length > 0)
        numbers.push(Number(str))
    
    let answer = numbers.reduce((acc, curr) => acc + curr, 0);
    
    return answer
}