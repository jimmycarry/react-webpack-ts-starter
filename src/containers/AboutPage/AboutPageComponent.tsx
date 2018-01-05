import * as React from 'react';
import { AboutPageStore } from './AboutPageStore';
import { BaseContainerPageProps } from '@src/model/BaseModel';
import { observer, inject } from 'mobx-react';

export interface AboutPageProps extends BaseContainerPageProps<{}>{
    AboutPageStore: AboutPageStore;
}

@inject('AboutPageStore')
@observer
export class AboutPageComponent extends React.Component<AboutPageProps, {}>{
    render() {
        return (
            <div>
                {
                    this.props.AboutPageStore.info
                }
            </div>
        );
    }
}
