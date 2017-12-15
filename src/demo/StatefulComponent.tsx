import * as React from 'react';

export interface StatefulComponentProps {
    label: string;
}
export type StatefulComponentState = {
    counter: number
};
/**
 * 有状态组件
 */
export class StatefulComponent extends React.Component<StatefulComponentProps, StatefulComponentState>{
    state: StatefulComponentState = {
        counter: 0
    };
    constructor(props) {
        super(props);
    }
    render() {
        const { label } = this.props;
        const { counter } = this.state;
        return (
            <div>
                {label}:{counter}
                <button onClick={this.handleIncrement} type='button'>Increment</button>
            </div>
        );
    }

    handleIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    }
}
