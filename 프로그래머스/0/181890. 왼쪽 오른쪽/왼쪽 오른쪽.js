function solution(str_list) {
    if(!str_list.includes('l') && !str_list.includes('r'))
        return [];
    
    let lIdx = str_list.indexOf('l');
    let rIdx = str_list.indexOf('r');
    
    if ((lIdx !== -1 && lIdx < rIdx) || rIdx === -1) {
        return str_list.slice(0, lIdx);
    }

    if ((rIdx !== -1 && rIdx < lIdx) || lIdx === -1) {
        return str_list.slice(rIdx + 1);
    }

    return [];
}