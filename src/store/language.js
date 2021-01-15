import { readable } from 'svelte/store';

const getLanguage = () => {
    let hostname = window.location.hostname
    let split = hostname.split('.')
    let top = split[split.length - 1]
    if (top === 'com') {
        return ['no', 'no', 'Norsk']
    }
    else {
        return ['com', 'en', 'English']
    }
}

export const language = readable(getLanguage());