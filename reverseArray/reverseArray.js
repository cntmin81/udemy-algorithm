function reverseArray(arr) {
    var arrLength = arr.length;
    for (var i = arrLength - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr.slice(arrLength);
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));