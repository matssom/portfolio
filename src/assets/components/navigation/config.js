export const elements = [
    { 
        id: 1,
        text: 'Work', 
        style: 'invisible',
        type: 'route',
        to: 'work'
    },
    { 
        id: 2,
        text: 'Education', 
        style: 'invisible',
        type: 'route',
        to: '/education'
    },
    { 
        id: 3,
        text: 'Skills', 
        style: 'invisible',
        structure: [
            [
                {
                    id: 1,
                    text: 'Soft skills',
                    icon: 'open-book',
                    type: 'route',
                    to: '/soft-skills'
                },
                {
                    id: 2,
                    text: 'Hard skills',
                    icon: 'tools',
                    type: 'route',
                    to: '/tools'
                },
                {
                    id: 3,
                    text: 'Concepts',
                    type: 'route',
                    icon: 'api',
                    to: '/concepts'
                }
            ]
        ]
    },
    { 
        id: 4,
        text: 'For developers', 
        style: 'invisible',
        structure: [
            [
                {
                    id: 2,
                    text: 'Github',
                    icon: 'github',
                    type: 'route',
                    to: '/github'
                },
                {
                    id: 3, 
                    text: 'Npm packages',
                    icon: 'npm',
                    type: 'route',
                    to: '/npm'
                }
            ]
        ]
    },
    {
        id: 5,
        type: 'link',
        style: 'invisible',
        to: 'https://github.com/matssom',
        icon: 'github'
    },
    {
        id: 6,
        type: 'link',
        style: 'invisible',
        to: 'https://linkedin.com/in/mats-sommervold',
        icon: 'linkedin'
    },
    {
        id: 7,
        type: 'link',
        style: 'invisible',
        to: 'https://twitter.com/matssommer',
        icon: 'twitter'
    }
]
// A link can include name, type, to, action, external, reverse style and an icon.