import * as React from 'react';
import { observer } from 'mobx-react';


interface ListProps{
    store: any;
}

@observer
class ListComponent extends React.Component<ListProps, {}>{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { store } = this.props;
        
        return (
            <div>
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