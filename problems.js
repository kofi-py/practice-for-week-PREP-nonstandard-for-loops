function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    for (let i=0; i < arr.length; i++) {
        if (i % 2 === 1) {
            console.log(arr[i])
        }
    }
}


function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    for (let i=arr.length - 1; i >= 0; i--) {
        if (i % 2 === 1) {
            console.log(arr[i])
        }
    }
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    for (let i = 1; i < arr.length; i *= 2) {
        console.log(arr[i]);
    }
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    for (let i = 1; i < arr.length; i *= n) {
        console.log(arr[i]);
    }
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    console.log(arr.slice(0, Math.ceil(arr.length / 2)));
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let midIndex = Math.ceil(arr.length / 2);
    console.log(arr.slice(midIndex));
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}