const RomanDic = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

function helper(num){
    let ans = '';

    if(String(num).includes(9) || String(num).includes(4)){
        if(num === 4){
            return RomanDic[4];
        }else if(num === 9){
            return RomanDic[9];
        }

        let nextNumber = null;
        let i = 1;
        while(!nextNumber){
            if(RomanDic[num + i] !== undefined){
                nextNumber = num + i;
            }
            i++;
        }
        const difference = nextNumber - num;
        return RomanDic[difference] + RomanDic[nextNumber];
    }

    while(num > 0){
        if(num >= 1000){
            ans += RomanDic[1000];
            num -= 1000;
        }else if(num >= 500){
            ans += RomanDic[500];
            num -= 500;
        }else if(num >= 100){
            ans += RomanDic[100];
            num -= 100;
        }else if(num >= 50){
            ans += RomanDic[50];
            num -= 50;;
        }else if(num >= 10){
            ans += RomanDic[10];
            num -= 10;;
        }else if(num >= 5){
            ans += RomanDic[5];
            num -= 5;
        }else if(num >= 1){
            ans += RomanDic[1];
            num -= 1;
        }
    }

    return ans;
}

function convertToRoman(num) {
    let numCopy = String(num).split('');
    let numToRoman = '';
    
    for(let i = 0; i < numCopy.length; i++){
        if(numCopy[i] != 0){
            let numToTest = numCopy[i];
            let j = i;
            while(j < numCopy.length - 1){
                numToTest += 0;
                j++;
            }
            let ans = helper(parseInt(numToTest));
            numToRoman += ans;
        }
    }

    return numToRoman;
}

console.log(convertToRoman(44))