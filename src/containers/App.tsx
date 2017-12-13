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
        console.log(this,store);
    }
    render() {
        return (
            <div className={styles['container']}>
                React Starter Kit
                <img src={images} />
                <Button type='primary' onClick={this.handleClick}>开始</Button>
                <ListComponet store={store} />
            </div>
        );
    }

    handleClick = () => {
        console.log(this);
    }
}

export default App;
