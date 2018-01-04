import * as React from 'react';
import { AboutPageStore } from './AboutPageStore';
import { observer, inject } from 'mobx-react';

export interface AboutPageProps{
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
