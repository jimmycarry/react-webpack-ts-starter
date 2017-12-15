import * as React from 'react';

export interface StatelessComponentProps {
    label: string;
    counter: number;
    onIncrement: () => any;
}
/**
 * 无状态组件
 * @param
 */
export const StatelessComponent: React.SFC<StatelessComponentProps> = (props) => {
    const { label, counter, onIncrement } = props;
    return (
        <div>
            {label}:{counter}
            <button type='button' onClick={onIncrement}>Increment</button>
        </div>
    );
};
