module.exports = function ifMultipleConditions () {
    // LONGHAND
    const x = 'jkl'
    if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl' ) {
        // logic
        console.log('ifMultipleConditions: BAD')
    }

    if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
        // logic
        console.log('ifMultipleConditions: GOOD')
    }
}