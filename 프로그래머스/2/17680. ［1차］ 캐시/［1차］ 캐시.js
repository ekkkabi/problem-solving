function solution(cacheSize, cities) {
    var answer = 0;
    let cashe = [];
    
    if(cacheSize === 0){
        return cities.length * 5;
    }
    
    for(let city of cities){
        city = city.toUpperCase();
        
        // 캐시 히트
        if(cashe.includes(city)){
            cashe.splice(cashe.indexOf(city), 1);
            answer += 1;
            
        }
        // 캐시 미스
        else{
            answer += 5;            
        }
        // 캐시에 도시 넣기
        cashe.push(city);
        // 캐시 사이즈가 넘칠 경우, 뒤에서부터 자름
        if(cashe.length > cacheSize){
            cashe = cashe.slice(-cacheSize);
        }
    }
    return answer;
}