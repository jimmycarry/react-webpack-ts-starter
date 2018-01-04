import { HomePageStore } from '@src/containers/HomePage/HomePageStore';

export interface AppStore{
    HomePageStore?: HomePageStore;
}

export const appStore: AppStore = {
    HomePageStore: new HomePageStore()
};
