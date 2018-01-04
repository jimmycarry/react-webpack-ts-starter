import * as React from 'react';
import { observable } from 'mobx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { appStore } from '@src/Store';
import {Routes } from '@src/Routes';
import { MenuComponents } from '@src/components/Menu/MenuComponents';

class App extends React.Component<{}, {}>{
    constructor(props:any) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <Provider {...appStore} >
                <Router>
                    <Switch>
                        {
                            Routes.map((item, index) => {
                                return <Route {...item} key={index} />;
                            })
                        }
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
