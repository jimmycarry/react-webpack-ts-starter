import { observable } from 'mobx';

export class AboutPageStore{
    @observable info: string = 'I\'m jimmy ye';
    constructor() {
    }
}
