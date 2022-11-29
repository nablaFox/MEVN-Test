const path = require('path')

const aliases = {
    '@': 'src',
    '@design': 'src/styles/index.scss'
}

Object.keys(aliases).forEach(key => {
    aliases[key] = path.resolve(__dirname, aliases[key])
})

module.exports = aliases;