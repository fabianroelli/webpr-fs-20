const palindrome = (input) =>
{
    let lowerInput = input.toLowerCase();
    let chars = str2chars(lowerInput).filter(c => isAlpha(c));

    let mid = (chars.length) / 2
    let right = chars.length -1;

    for(let i=0; i<=mid; i++){

        if(chars[right] !== chars[i]) {
            return false;
        }
        right--;
    }

    return true;
}


palindrome("Amore,Roma!")