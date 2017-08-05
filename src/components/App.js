import React from 'react';

class App extends React.Component {
    state = {
        counter: 0
    }

    _increment = (e) => {
        e.preventDefault();
        this.setState({
            counter: this.state.counter+1
        });
    }

    _decrement = (e) => {
        e.preventDefault();
        this.setState({
            counter: this.state.counter-1
        });
    }

    _reset = (e) => {
        e.preventDefault();
        this.setState({
            counter: 0
        })
    }

    render() {
        return (
            <div className="app-wrapper">
                <h1>{this.state.counter}</h1>
                <p onClick={this._increment}>Click me to increment the counter!</p>
                <p onClick={this._decrement}>Click me to decrement the counter!</p>
                <p onClick={this._reset}>Click me to reset the counter</p>
            </div>
        )
    }
}

export default App;
