import * as React from 'react';
import { observable } from 'mobx';
import ListComponet from './List';
import { Button } from 'antd';

const images = require('../assets/bg.jpeg');
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
                React Starter Kit
                <img src={images} />
                <ListComponet store={store} />
                <Button type='primary'>开始</Button>
            </div>
        );
    }
}

export default App;
