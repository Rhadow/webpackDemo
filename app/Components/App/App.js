import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWorld: true
        };
    }
    _onClickHandler() {
        this.setState({
            showWorld: !this.state.showWorld
        });
    }
    render() {
        return (
            <div onClick={this._onClickHandler.bind(this)}>
                Hello {this.state.showWorld ? 'World' : 'React'}!
            </div>
        );
    }
}

export default App;
