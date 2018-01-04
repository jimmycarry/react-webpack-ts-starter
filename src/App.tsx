import * as React from 'react';
import { observable } from 'mobx';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

class App extends React.Component<{}, {}>{
    constructor(props:any) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Switch>

                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
