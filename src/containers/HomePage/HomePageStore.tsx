import { observable, action } from 'mobx';

export class HomePageStore {

    @observable list = [0, 1, 2];
    constructor() {
    }
    @action
    request() {
        this.list.push(4);
    }
}
