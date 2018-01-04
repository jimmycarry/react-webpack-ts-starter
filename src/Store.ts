import { HomePageStore } from '@src/containers/HomePage/HomePageStore';
import { AboutPageStore } from '@src/containers/AboutPage/AboutPageStore';

export interface AppStore{
    HomePageStore?: HomePageStore;
    AboutPageStore?: AboutPageStore;
}

export const appStore: AppStore = {
    HomePageStore: new HomePageStore(),
    AboutPageStore:new AboutPageStore()
};
