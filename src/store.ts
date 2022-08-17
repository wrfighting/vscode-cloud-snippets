import { SelectStore } from "./types";

export class Store {
    selectStore: SelectStore = {};

    addSelectStore(prefix: string, count: number) {
        this.selectStore[prefix] = this.selectStore[prefix] || 0;
        this.selectStore[prefix] = this.selectStore[prefix] + count;
    }

    clearSelectStore() {
        this.selectStore = {};
    }
};

export const store = new Store();
