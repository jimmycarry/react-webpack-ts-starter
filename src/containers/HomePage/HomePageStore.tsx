import { observable, action } from 'mobx';
import { BrowserRouter} from 'react-router-dom';

export class HomePageStore {

    @observable list = [0, 1, 2];
    constructor() {
    }
    @action.bound
    request() {
        console.log(this);
        this.list.push(4);
    }
}
