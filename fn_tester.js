// my function tester

// this is just so we can color our text in the terminal
const colors = require('colors')

module.exports = function tester(fx, args, expectedResult) {
    // fast fail in case of bad/missing params, respond with usage manual
    if (!fx || typeof fx != 'function' || !args || typeof args != 'object') {
        // console.log('received argument datatypes:',typeof fx, typeof args, typeof expectedResult)
        console.log('--- How to use'.yellow, 'tester'.blue, '---'.yellow)
        console.log(`${'tester'.blue}(${'function'.cyan}, ${'[arguments]'.cyan}, ${'expectedResult'.cyan})`)
        console.log('1- an', 'uncalled'.yellow, 'function'.cyan,' i.e. no "()",')
        console.log('2- an','array[]'.cyan, 'of arguments (use an empty array [] for no args),')
        console.log('3- an optional', 'expectedResult'.cyan, 
            '(if left blank it will be assumed as', 'undefined'.yellow, ')')
        console.log('returns'.magenta, 'a boolean true/false for pass/fail')
        return 
    }
    // here we begin the actual testing
    console.log('\n \n')
    console.log('...Begin Test...'.bgMagenta)
    console.log(`Testing function ${fx.name.cyan}`)
    if (args[0]) console.log('Args: ', args)
    try {
        const result = fx(...args)
        if (result == expectedResult) {
            console.log('Passed. '.green, 'Result: ', expectedResult)
            return true
        } else {
            console.log('Failed. '.red, 'Expected ', expectedResult, ' but got ', result)
            return false
        }
    } catch (error) {
        console.log('Error'.red, error)
        return false
    }
}

