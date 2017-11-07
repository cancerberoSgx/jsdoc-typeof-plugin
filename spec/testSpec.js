var jsdoc = require('./util').jsdoc

describe('1', () => {

    it('1', () => {
        var ast = jsdoc('spec/assets/jsdoc-config1.json')
        // console.log(JSON.stringify(ast, 0, 2))
        var extendMethod = ast.find((node) => node.longname === 'View.extend')
        expect(extendMethod.returns[0].type.names[0]).toBe('Class.<View>')
    })
})