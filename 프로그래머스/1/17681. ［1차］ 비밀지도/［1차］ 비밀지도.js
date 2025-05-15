function getDigit(num, n){
    if(num == 0){
        return new Array(n).fill(0).join('')
    }
    
    let digits = []
    while(num!=0){
        digits.push(num % 2)
        num = parseInt(num/2)             
    }
    
    while(digits.length < n){
        digits.push(0)}
    
    return digits.reverse().join('')
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i<n; i++){
        let num1 = getDigit(arr1[i], n)
        let num2 = getDigit(arr2[i], n)
        
        let lst = ''
        for (let j = 0; j<n; j++){
            if(num1[j]==='0' && num2[j]==='0'){
                lst += ' '
            }
            else{
                lst += '#'
            }
        }
        answer.push(lst)
    }
    return answer;
}