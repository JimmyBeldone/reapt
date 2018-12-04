# How to use

**Props :**

- **children** *\[ < node > | \[ < nodes > ] | string ]* (required)
- **closeIcon** *\[ < node > | string ]* (Default: 'x', required)
- **classNameIcon** *\[ string ]* (Default: 'overlay-icon-close', required)

This component uses *React Portals*,
You can import Overlay component anywhere,
let's say in component **App** for example.

```js
import React, { PureComponent } from 'react'
import Overlay from 'path/to/Overlay'

export default class App extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            overlayActive: false
        }
    }

    openOverlay = () => { this.setState({overlayActive: true}) }

    closeOverlay = () => { this.setState({overlayActive: false}) }

    render() {
        return (
            <div className="app">
                {this.state.overlayActive &&
                    <Overlay onClose={this.closeOverlay} >
                        <h1>My title</h1>
                        <div>Content</div>
                    </Overlay>
                }
                <button onClick={this.openOverlay}>Open Overlay</button>
            </div>
        )
    }
}

```
