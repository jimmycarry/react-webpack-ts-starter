import { observable } from 'mobx';

export class HomePageStore {

    @observable list = [0, 1, 2];
    constructor() {
    }
}
