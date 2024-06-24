function solution(code) {
    let ret = '';
    let mode = false;
    for(let i = 0; i<code.length; i++){
        // mode = 0 일경우(false)
        if(!mode){
            if(code[i] !== '1' && (i % 2 == 0)){
                ret += code[i];
            }else if(code[i] === '1'){
                mode = !mode;
            }
        }else{  // mode =1 일경우 (true)
            if(code[i] !== '1' && (i % 2 !== 0)){
                ret += code[i];
            }else if(code[i] === '1'){
                mode = !mode;
            }
        }
    }
    return ret === "" ? "EMPTY" : ret;
}