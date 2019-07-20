function reverseWord(string) {
    var wordArr = string.split(' ');
    var reversedWordArr = [];

    wordArr.forEach(word => {
        var reversedWord = "";

        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        reversedWordArr.push(reversedWord);
    });
    return reversedWordArr.join(' ');
} 

console.log(reverseWord("this is string of words"));