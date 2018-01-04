import { RouteProps } from 'react-router-dom';
import { HomePageComponent } from '@src/containers/HomePage/HomePageComponent';
import { AboutPageComponent } from '@src/containers/AboutPage/AboutPageComponent';

export const Routes: RouteProps[] = [
    {
        path: '/',
        component: HomePageComponent,
        exact: true
    },
    {
        path: '/about',
        component: AboutPageComponent
    }
];
