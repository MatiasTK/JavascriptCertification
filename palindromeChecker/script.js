function palindrome(str) {
    let ans = true;
    let start = 0;
    let wordToCheck = str.replace(/[^A-Za-z0-9]/gm, '').toLowerCase();

    for(let i = wordToCheck.length-1; i >= 0; i--){
        if(start === i){
            return ans;
        }

        if(wordToCheck[i] !== wordToCheck[start]){
            ans = false;
        }

        start++;
    }
    

    return ans;
}