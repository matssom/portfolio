import { writable, derived } from 'svelte/store';
import { languages } from '../assets/components/languageControl/config';

export const language = writable(languages[0]);

export const nextLanguage = derived(
    language,
    $language => languages[(languages.findIndex(config => config.code === $language.code) + 1) % languages.length]
);