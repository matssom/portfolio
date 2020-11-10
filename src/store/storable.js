import { writable } from 'svelte/store';

export class Storable {
    id
    store
  
    constructor(id, data) {
        if(typeof id === 'undefined') throw new Error('Storables require a key to interact')
        this.id = id;
        this.store = exists() ? writable(data()) : writable(data);
    }
  
    get exists() {
        return !!localStorage.getItem(this.id)
    }
  
    get data() {
        const DATA = localStorage.getItem(this.id)
        return JSON.parse(DATA)
    }
  
    set data(data) {
        const DATA = JSON.stringify(data)
        localStorage.setItem(this.id, DATA)
    }

    get() {
        return store.get()
    }

    set(data) {
        data(data);
        store.set(data);
    }

    update(callback) {
        return store.update(callback);
    }

    subscribe(callback) {
        return store.subscribe(callback);
    }
  
    remove() {
        localStorage.removeItem(this.id)
        return true
    }  
}