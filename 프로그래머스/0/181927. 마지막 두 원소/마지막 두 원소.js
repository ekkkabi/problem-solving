function solution(num_list) {
    let len = num_list.length;
    let last = num_list[len-1] - num_list[len-2];
    if(last > 0){
        num_list.push(last);
        return num_list;
    }       
    else{
        num_list.push(num_list[len-1]*2);
        return num_list;
    }
}