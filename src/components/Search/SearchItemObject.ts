import { v4 as uuidv4 } from "uuid";

export default class SearchItemObject<T = {}> {
    id: string;
    title: string;
    data?: T;
    constructor(title: string, data?: T) {
        this.id = uuidv4();
        this.title = title;
        this.data = data;
    }
}
