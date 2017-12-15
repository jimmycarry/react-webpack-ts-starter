import * as React from 'react';

/**
 * 范型
 */
export interface GenericStatefulComponentProps<T>{
    items: Array<T>;
    itemsRenderer: (item: T) => JSX.Element;
}

/**
 * 范型组件
 */
export class GenericStatefulComponent<T> extends React.Component<GenericStatefulComponentProps<T>, {}>{
    render() {
        const {items,itemsRenderer } = this.props;
        return (
            <div>
                {
                    items.map(itemsRenderer)
                }
            </div>
        );
    }
}

// example

// import * as React from 'react';

// import { IUser } from '@src/models';
// import { GenericList } from '@src/components';

// export const UserList = class extends GenericList<IUser> { };

// export default ({ users }: { users: IUser[] }) => (
//   <UserList
//     items={users}
//     itemRenderer={(item) => <div key={item.id}>{item.fullName}</div>}
//   />
// );
