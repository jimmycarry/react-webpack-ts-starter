import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { ListStore } from './ListStore';

interface ListComponentProps{
    store: ListStore;
}

interface ListComponentState{
    a: number;
}
@observer
class ListComponent extends React.Component<ListComponentProps, ListComponentState>{
    constructor(props:ListComponentProps) {
        super(props);
        this.state = {
            a: 1
        };
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { store } = this.props;
        return (
            <div>
                <ul>
                    {
                        store.list.map((item:any, index:number) => {
                            return (
                                <li key={index}>{item}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default ListComponent;
