export const elements = [
    { 
        id: 1,
        text: 'Work', 
        type: 'route',
        style: 'invisible',
        to: '/work'
    },
    { 
        id: 2,
        text: 'Projects', 
        type: 'route',
        style: 'invisible',
        to: '/projects'
    },
    { 
        id: 3,
        text: 'For developers', 
        type: 'route',
        style: 'invisible',
        to: '/developer'
    },
    {
        id: 4,
        type: 'link',
        style: 'invisible',
        to: 'https://github.com/matssom',
        icon: 'github'
    },
    {
        id: 5,
        type: 'link',
        style: 'invisible',
        to: 'https://linkedin.com/in/mats-sommervold',
        icon: 'linkedin'
    },
    {
        id: 6,
        type: 'link',
        style: 'invisible',
        to: 'https://twitter.com/matssommer',
        icon: 'twitter'
    }
]
// A link can include name, type, to, action, external, reverse style and an icon.