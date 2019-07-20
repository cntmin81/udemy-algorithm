function isPalindrome(string) {
    // make string to lowercase
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var letterArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            letterArr.push(char);
        }
    });

    console.log(letterArr);

    if( letterArr.join('') === letterArr.reverse().join('')) {
        return true;
    }
    return false;

}

console.log(isPalindrome("Madam I'm adam"));