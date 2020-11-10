import { writable, readable, derived, get } from 'svelte/store';
import { storable } from './storable';

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

export let path = new storable('path', ['root']);
export let history = new storable('history', []);
export let elements = new storable('elements', []);

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
