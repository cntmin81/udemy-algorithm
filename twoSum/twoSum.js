function twoSumOSquareN(numArray, sum) {
    var result = [];
    numArray.forEach(num => {
        var tempArr = [];
        for (var i = 0; i < numArray.length; i++) {
            if (num + numArray[i] === sum) {
                tempArr = [num, numArray[i]];
            }
        }
        if (tempArr.length > 0) {
            result.push(tempArr);
        }
    });

    return result;
}

function myTwoSum(numArray, sum) {
    var result = [];
    var xArr = [];
    numArray.forEach(num => {
        var tempX = sum - num;
        if (numArray.includes(tempX)) {
            result.push([num, tempX]);
        }
    });

    return result;
}

function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterPart = sum - currNum;
        if(hashTable.indexOf(counterPart) !== -1) {
            pairs.push([currNum, counterPart]);
        }
        hashTable.push(currNum);
    }

    return pairs;
}

console.log(twoSum([7,3,2,1,6], 9));