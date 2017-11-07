var regex = /\{\s*typeof\s+([^\s]+)\s*\}/g

exports.handlers = {
    jsdocCommentFound: (e) => {
        e.comment = (e.comment || '').replace(regex, (typeExpression, className, index, all) => {
            return '{Class<'+className+'>}'
        })
    }
}