import * as React from 'react';

export interface StatefulWithInitialProps {
    label: string;
    initialCount?: number;
}
interface DefaultProps {
    initialCount: number;
}

type PropsWithDefaultProps = StatefulWithInitialProps & DefaultProps;

interface State{
    counter: number;
}
/**
 * 有状态带默认Props组件
 */
export const StatefulWithInitialPropsComponet: React.ComponentClass<StatefulWithInitialProps> =
    class extends React.Component<PropsWithDefaultProps, State>{
        static defaultProps: DefaultProps = {
            initialCount: 0
        };
        componentWillReceiveProps(nextProps: PropsWithDefaultProps) {
            const { initialCount } = nextProps;
            if (initialCount != null && initialCount !== this.props.initialCount) {
                this.setState({ counter: initialCount });
            }
        }
        render() {
            const { counter } = this.state;
            const { label } = this.props;
            return (
                <div>
                    {label}:{counter}
                    <button onClick={this.handleIncrement}>Increment</button>
                </div>
            );
        }

        handleIncrement = () => {
            this.setState({ counter: this.state.counter + 1 });
        }
    };
