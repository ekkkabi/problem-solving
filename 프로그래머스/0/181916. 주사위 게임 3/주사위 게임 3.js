function solution(a, b, c, d) {
    let lst = [a,b,c,d];
    let sets = Array.from(new Set(lst));
    let objs = {};
    for (let val of lst){
        if(objs[val] === undefined)
            objs[val] = 1;
        else
            objs[val]++;  
    }
    
    let answer = 0;
    let p = 0;
    let q = 0;
    let r = 0;
    switch(sets.length){
        case 1:
            answer = 1111 * a;
            break;
        case 2:
            if (Object.values(objs).includes(3)) {
               p = Number(Object.keys(objs).find((key) => objs[key] === 3));
                q = Number(Object.keys(objs).find((key) => objs[key] === 1));
                answer = (10*p+q)**2;
             }else{
                 let keys = Object.keys(objs).filter(key => objs[key] === 2);
                 p = Number(keys[0]);
                 q = Number(keys[1]);
                 answer = (p + q) * Math.abs(p - q);
             }
            
            break;
        case 3:
            let keys = Object.keys(objs).filter(key => objs[key] === 1);
            q = Number(keys[0]);
            r = Number(keys[1]);
            answer = q*r;
            break;
        case 4:
            answer = Math.min(...lst);
            break;
    }
    return answer;
}