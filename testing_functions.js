function echo(foo) {
    // {f}
    return foo
}

function sum(a, b) {
    // a.push(foo)
    return a + b
}

const tester = require('./fn_tester.js')

/* will get you the manual
tester()
tester('a')
tester('a',[])
tester(()=>{return})
*/

/* now for some actual testing 

tester(echo, ['hello'], 'hello')
tester(echo, ['hello'], 'hella')
*/

tester(sum,[1,0], 2)
tester(sum,[2,4],6)
