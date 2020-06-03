module.exports = {
    module: {
        defaultRules: [
            {
                type: 'javascript/auto',
                resolve: {}
            },
            {
                test: /\.json$/i,
                type: 'json'
            }
        ]
    }
}