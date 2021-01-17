import { writable } from 'svelte/store';

export const currentDropdown = writable();

currentDropdown.subscribe(value => {
    if (value) {
        console.log("New selected element: " + value.innerText)
    }
})