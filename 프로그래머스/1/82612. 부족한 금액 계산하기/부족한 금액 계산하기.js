function solution(price, money, count) {  
    let tmp = 0;
    for(let i = 1; i<=count; i++)
        tmp += i * price;
    return money-tmp >= 0 ? 0 : Math.abs(money-tmp);
}