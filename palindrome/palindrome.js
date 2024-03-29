function isPalindrome(string) {
    string = string.toLowerCase();
    var characterArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var letterArr = [];
    characterArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) {
            letterArr.push(char);
        }
    });

    if (letterArr.join('') === letterArr.reverse().join('')) {
        return true;
    }
    return false;
}

console.log(isPalindrome("Madam I'm adam."));