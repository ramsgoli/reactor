import React from 'react';

import css from './App.css'

class App extends React.Component {
    render() {
        return (
            <div className={css.app}>
                <h1 className={css.counter}>{this.props.count}</h1>
                <p onClick={this.props.increment}>Click me to increment the counter!</p>
                <p onClick={this.props.decrement}>Click me to decrement the counter!</p>
                <p onClick={this.props.reset}>Click me to reset the counter</p>
            </div>
        )
    }
}

export default App;
