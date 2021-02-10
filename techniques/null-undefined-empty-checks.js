module.exports = function nullUndefinedEmptyChecks () {
    let test1 = undefined
    if (test1 !== null && test1 !== undefined && test1 !== '') {
        console.log('test1: ', test1)
    }

    let test2 = test1 || 'SOME STRING'
    console.log('test2: ', test2)
}