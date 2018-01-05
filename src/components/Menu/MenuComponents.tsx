import * as React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./MenuStyle.less');

export const MenuComponents = class extends React.Component<{}, {}>{
    render() {
        return (
            <ul className={styles['container']}>
                <li>
                    <Link to={'/'} >home</Link>
                </li>
                <li>
                    <Link to={'/about'}>about</Link>
                </li>
            </ul>
        );
    }
};
