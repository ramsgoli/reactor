import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'

import { store, history } from 'reducers'

import 'index.css'
import Home from 'containers/Home'

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Switch>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

render(
    <Root />,
    document.getElementById('root')
)
