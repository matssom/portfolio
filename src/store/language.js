import { derived } from 'svelte/store';
import { storable } from 'svelte-storable';
import { languages } from '../assets/components/languageControl/config';

export const language = storable('language', languages[0]);

export const nextLanguage = derived(
    language,
    $language => languages[(languages.findIndex(config => config.code === $language.code) + 1) % languages.length]
);