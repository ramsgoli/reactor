import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { homeActions } from 'reducers'

import App from 'components/App'

class Home extends React.Component {
    render() {
        return(
            <App
                count={this.props.count}
                increment={this.props.increment}
                decrement={this.props.decrement}
                reset={this.props.reset}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.Home.get('count')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: bindActionCreators(homeActions.incrementCounter, dispatch),
        decrement: bindActionCreators(homeActions.decrementCounter, dispatch),
        reset: bindActionCreators(homeActions.resetCounter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)