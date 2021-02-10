module.exports = function declaringVariables () {
    // LONG
    let test1
    let test2 = 1
    console.log('declaringVariables LONG: ', "test1: ",test1, "test2: ",test2 )
    // SHORT
    let test3, test4 = 1
    console.log('declaringVariables SHORT: ', "test3: ",test3, "test4: ",test4 )
}