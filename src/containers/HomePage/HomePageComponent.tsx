import * as React from 'react';
import { observable } from 'mobx';
import { HomePageStore } from './HomePageStore';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { BaseContainerPageProps } from '@src/model/BaseModel';

const logo = require('../../assets/logo.svg');
const styles = require('./HomePageStyle.less');

export interface HomePageProps extends BaseContainerPageProps<{}>{
    HomePageStore: HomePageStore;
}

@inject('HomePageStore')
@observer
export class HomePageComponent extends React.Component<HomePageProps, {}>{
    constructor(props: HomePageProps) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.HomePageStore.request();
        }, 3000);
    }
    render() {
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
