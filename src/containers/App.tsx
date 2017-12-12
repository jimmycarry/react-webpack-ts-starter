import * as React from 'react';

const images = require('../assets/bg.jpeg');
const styles = require('./App.less');

class App extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <div className={styles['container']}>
                React Starter Kit
                <img src={images} />
            </div>
        );
    }
}

export default App;