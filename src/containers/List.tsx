import * as React from 'react';
import { observer } from 'mobx-react';


interface ListProps{
    store: any;
}

interface ListIState{
    a: number;
}
@observer
class ListComponent extends React.Component<ListProps, ListIState>{
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        };
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { store } = this.props;
        const { a } = this.state;
    
        return (
            <div>
                {a}
                <ul>
                    {
                        store.list.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ListComponent;