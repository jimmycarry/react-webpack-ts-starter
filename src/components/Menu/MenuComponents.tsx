import * as React from 'react';
import { Link } from 'react-router-dom';

export const MenuComponents = class extends React.Component<{}, {}>{
    render() {
        return (
            <ul>
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
