function solution(n, control) {
    [...control].map((idx)=>{
        switch(idx){
            case 'w':
                n +=1;
                break;
            case 's':
                n -=1;
                break;
            case 'd':
                n +=10;
                break;
            case 'a':
                n-=10;
                break;
        }            
    })
    return n;
}