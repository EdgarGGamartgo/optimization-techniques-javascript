module.exports = function nullishCoalescingOperator() {
    const test = null ?? 'default'
    console.log('Nullish coalescing Operator: ', test)
    const test1 = 0 ?? 2
    console.log('Nullish coalescing Operator: ', test1)
}