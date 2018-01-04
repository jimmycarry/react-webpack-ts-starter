import { RouteProps } from 'react-router-dom';
import { HomePageComponent } from '@src/containers/HomePage/HomePageComponent';

export const Routes: RouteProps[] = [
    {
        path: '/',
        component: HomePageComponent
    }
];
