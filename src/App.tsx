import * as React from 'react';
import { observable } from 'mobx';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { appStore } from '@src/Store';
import {Routes } from '@src/Routes';

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
                <BrowserRouter>
                    <Switch>
                        {
                            Routes.map((item, index) => {
                                return <Route {...item} key={index} />;
                            })
                        }
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
