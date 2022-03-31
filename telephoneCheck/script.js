function telephoneCheck(str) {
    if(!(str[0].match(/[\d(]/gm))){
        return false;
    }

    if(str.includes('(') || str.includes(')')){
        if(!(str.includes('(') && str.includes(')'))){
            return false;
        }
    }

    if(str.match(/[!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]+/)){
        return false;
    }

    if((str.match(/-/g)||[]).length > 2){
        return false;
    }
    
    let res = false;
    let number = str.replace(/\D/g,'');
    if(number.length === 11 && number[0] == 1){
        res = true;
    }else if(number.length === 10){
        let code = number[0] + number[1] + number[2];
        if(code == 555){
            res = true;
        }
    }

    return res;
}

console.log(telephoneCheck("55 55-55-555-5"));