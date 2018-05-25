import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import NavTemplate from './NavTemplate'

class Nav extends PureComponent {

    static propTypes = {

    }

    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            overlayActive: true
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('get derived');
        return {}
    }

    componentDidMount() {
        console.log('did mount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('did update');
    }

    componentDidCatch(error, info) {
        console.log(error);
        this.setState(state => ({...state, hasError: true}))
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        if (this.state.hasError) {
            return <div>Une erreur est survenue</div>
        }
        return <NavTemplate/>
    }
}

export default Nav
