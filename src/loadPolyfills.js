import 'core-js/es6/promise'

export default function loadPolyfills() {

    const includes = () => new Promise(resolve => {
        if ('includes' in Array.prototype) return resolve()

        require.ensure([], () => {
            require('core-js/modules/es7.array.includes')

            resolve()
        }, 'includes')
    })

    const assign = () => new Promise(resolve => {
        if ('assign' in Object) return resolve()

        require.ensure([], () => {
            require('core-js/modules/es6.object.assign')

            resolve()
        }, 'assign')
    })

    const keys = () => new Promise(resolve => {
        if ('keys' in Object) return resolve()

        require.ensure([], () => {
            require('core-js/modules/es6.object.keys')
        }, 'keys')

        resolve()
    })

    return Promise.all([
        includes(),
        assign(),
        keys()
    ])

}
