module.exports = {
    plugins: {
        'postcss-import' : {},
        'postcss-nested-ancestors':{},
        'postcss-nested':{},
        'postcss-cssnext' : {
            browsers:['last 3 versions', '>5%'],
        },
    }
}