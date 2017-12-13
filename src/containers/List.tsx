import * as React from 'react';
import { observer } from 'mobx-react';

interface ListComponentProps{
    store: any;
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
        const { a } = this.state;
        return (
            <div>
                {a}
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
