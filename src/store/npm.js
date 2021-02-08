import { readable } from 'svelte/store'

const getPackage = async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`, {
        method: 'get',
        mode: 'no-cors'
    })

    const data = await res.json()
    console.log(data)
    return data
}

export const svelteStorable = readable(null, (set) => { set(getPackage('svelte-storable')) })