const path = require('path')

const aliases = {
    '@': 'src',
    '@components': 'src/components/',
    '@views': 'src/router/views',
    '@layouts': 'src/router/layouts',
    '@router': 'src/router',
    '@state': 'src/state',
    '@design': 'src/styles/index.scss',
}

Object.keys(aliases).forEach(key => {
    aliases[key] = path.resolve(__dirname, aliases[key])
})

module.exports = aliases;