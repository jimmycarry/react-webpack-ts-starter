import * as React from 'react';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';

const logo = require('../assets/logo.svg');
const styles = require('./HomePageStyle.less');

@inject('HomePageStore')
@observer
export class HomePageComponent extends React.Component<{}, {}>{
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
            </div>
        );
    }
}
