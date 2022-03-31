function rot13(str) {
    let res = '';
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    for(let i = 0; i < str.length; i++){
        if(/\W/gm.test(str[i])){
            res += str[i];
        }else{
            let add = alphabet.indexOf(str[i]) + 13;
            if(add >= alphabet.length){
                add-= 26;
            }
    
            res += alphabet[add];
        }
    }

    return res;
}
  
console.log(rot13("SERR CVMMN!"));