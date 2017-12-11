import * as React from 'react';

const images = require('../assets/bg.jpeg');

class App extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <div>
                React Starter Kit
                <img src={images} />
            </div>
        );
    }
}

export default App;