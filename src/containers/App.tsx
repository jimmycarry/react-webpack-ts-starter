import * as React from 'react';
import { observable } from 'mobx';
import ListComponet from './List';

const logo = require('../assets/logo.svg');
const styles = require('./App.less');

const store = observable({
    list: [1,2,3]
});
class App extends React.Component<{}, {}>{
    constructor(props:any) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <div className={styles['container']}>
                <img src={logo} className={styles['logo']}/>
                <ListComponet store={store} />
            </div>
        );
    }
}

export default App;
