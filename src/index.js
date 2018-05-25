import loadPolyfills from './loadPolyfills'

loadPolyfills().then(import('./setup'))
