import { readable, derived, get } from 'svelte/store';
import { storable } from 'svelte-storable';

export let fs = readable({
    dir: {
        root: {
            dir: {
                skills: {
                    dir: {
                        code: {
                            file: ['code.txt']
                        }
                    },
                    file: ['skills.txt']
                },
                test: {
                    file: ['test2.txt', 'something.exe']
                }
            },
            file: ['test.txt']
        }
    }
});

export let path = storable('path', ['root']);
export let history = storable('history', []);
export let elements = storable('elements', []);

export let dir = derived(
    path,
    $path => {
        let dir = get(fs);
        for (let e of $path) {
            dir = dir.dir[e];
        }
        return dir;
    }
);
