function twoSumOSquareN(numArray, sum) {
    var result = [];
    numArray.forEach(num => {
        var tempArr = [];
        for (var i = 0; i < numArray.length; i++) {
            if ( num + numArray[i] === sum) {
                tempArr = [num, numArray[i]];
            }
        }
        if (tempArr.length > 0) {
            result.push(tempArr);
        }
    });

    return result;
}

function twoSum(numArray, sum) {
    var result = [];
    var xArr = [];
    numArray.forEach(num => {
        var tempX = sum - num;
        if(numArray.includes(tempX)) {
            result.push([num, tempX]);
        }
    });

    return result;
}

console.log(twoSum([1,2,3,6], 9));