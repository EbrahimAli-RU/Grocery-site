import React from 'react'

import Navigation from '../navigation/Navigation'
import Auxilary from '../../Hoc/Auxilary/Auxilary'

class Layout extends React.Component {
    render() {
        return (
            <Auxilary>
                <Navigation />
            </Auxilary>
        )
    }
}

export default Layout