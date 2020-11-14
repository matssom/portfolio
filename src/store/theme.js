import { derived } from 'svelte/store';
import { storable } from 'svelte-storable';
import { themes } from '../assets/components/themeControl/config';

export const theme = storable('theme',themes[0]);

export const nextTheme = derived(
    theme,
    $theme => themes[(themes.findIndex(config => config.name === $theme.name) + 1) % themes.length]
);