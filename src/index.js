import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { store } from 'reducers'

import 'index.css'
import Home from 'containers/Home'

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}

render(
    <Root />,
    document.getElementById('root')
)
