function solution(new_id) {
    let one = new_id.toLowerCase();
    let two = one.replace(/[^a-z0-9\-\_\.]/g, '');
    let thr = two.replace(/\.{2,}/g, '.');
    let four = thr
    if (thr[0] == '.')
        four = four.slice(1)
    if (thr[thr.length - 1] == '.')
        four = four.slice(0,four.length -1)
    
    let five = four
    if (five == '')
        five = 'a'
    
    let six = five
    if (six.length >=16)
        six = six.slice(0, 15)
    while(six[six.length -1] == '.')
        six = six.slice(0, six.length - 1)
    
    let sev = six
    while (sev.length <=2)
        sev += sev[sev.length-1]
    
    return sev;
    
    
}