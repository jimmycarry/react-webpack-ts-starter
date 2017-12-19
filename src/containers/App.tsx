import * as React from 'react';
import { observable } from 'mobx';
import ListComponet from './List';
import { ListStore } from './ListStore';

const logo = require('../assets/logo.svg');
const styles = require('./App.less');

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
                <div className={styles['logo-container']}>
                    <img src={logo} className={styles['logo']} />
                </div>
                <ListComponet store={new ListStore()} />
            </div>
        );
    }
}

export default App;
