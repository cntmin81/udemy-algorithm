function reverseWords(string) {
    var wordArr = string.split(' ');
    var reverseArr = [];
    wordArr.forEach(word => {
        var charArr = word.split('');
        var reverseCharArr = [];

        var charLength = charArr.length - 1;
        for (var i = charLength; i > -1; i--) {
            reverseCharArr.push(charArr[i]);
        }
        reverseArr.push(reverseCharArr.join(''));
    });

    return reverseArr.join(' ');
}

console.log(reverseWords("this is a string of words"));