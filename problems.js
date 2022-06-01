function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let new_arr=[]
    for (let i=1; arr.length>i; i+=2){
        new_arr.push(arr[i])
    }
    return new_arr
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    return oddIndices(arr).reverse()
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let new_arr=[];
    for (let i=1;i<arr.length;i*=2){
        new_arr.push(arr[i])
    }
    return new_arr
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let new_arr=[]
    for (i=1;i<arr.length;i*=n){
        new_arr.push(arr[i])
    }
    return new_arr
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    if ((arr.length)%2==0){
        return arr.slice(0,arr.length/2)
    }else{
        return arr.slice(0,(arr.length+1)/2)
    }
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    if ((arr.length)%2==0){
        return arr.slice(arr.length/2, arr.length)
    }else{
        return arr.slice((arr.length+1)/2, arr.length)
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
