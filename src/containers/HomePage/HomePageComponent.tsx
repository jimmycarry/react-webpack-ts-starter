import * as React from 'react';
import { observable } from 'mobx';
import { HomePageStore } from './HomePageStore';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const logo = require('../../assets/logo.svg');
const styles = require('./HomePageStyle.less');

export interface HomePageProps{
    HomePageStore: HomePageStore;
}
@inject('HomePageStore')
@observer
export class HomePageComponent extends React.Component<HomePageProps, {}>{
    constructor(props:any) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
        setTimeout(() => {
            this.props.HomePageStore.request();
        }, 3000);
    }
    render() {
        console.log(this);
        return (
            <div className={styles['container']}>
                <div className={styles['logo-container']}>
                    <img src={logo} className={styles['logo']} />
                </div>
                <ul>
                    {
                        this.props.HomePageStore.list.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            );
                        })
                    }
                </ul>
                <Link to='/about'>about</Link>
            </div>
        );
    }
}
