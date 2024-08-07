function solution(id_pw, db) {
    let id = id_pw[0];
    let pw = id_pw[1];
    
    let dataBase = new Map(db);
    if(dataBase.has(id)){
        if(dataBase.get(id) === pw)
            return "login";
        else 
            return 'wrong pw'
    }
    return 'fail';
}