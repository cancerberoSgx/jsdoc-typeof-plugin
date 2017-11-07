const shell = require('shelljs')
shell.config.silent = true

exports.jsdoc = function (configFile) {
    let p = shell.exec('node node_modules/jsdoc/jsdoc.js -c ' + configFile + ' -X')
    if (p.code != 0) {
        console.log('ERROR executing jsdoc: ', p.stderr)
        return {}
    }
    let output = p.stdout.toString()
    return JSON.parse(output)
}