export const elements = [
    { 
        id: 1,
        text: 'Experience', 
        type: 'route',
        style: 'invisible',
        to: '/experience',
        dropdown: true,
        structure: [
            [
                {
                    id: 1,
                    text: 'Work',
                    icon: 'work',
                    type: 'route',
                    to: '/work'
                },
                {
                    id: 2,
                    text: 'Education',
                    icon: 'education',
                    type: 'route',
                    to: '/education'
                }
            ]
        ]
    },
    { 
        id: 3,
        text: 'For developers', 
        type: 'route',
        style: 'invisible',
        to: '/developer',
        dropdown: true,
        structure: [
            [
                {
                    id: 1,
                    text: 'Coding skills',
                    icon: 'open-book',
                    type: 'route',
                    to: '/skills'
                },
                {
                    id: 2,
                    text: 'Tools & Languages',
                    icon: 'tools',
                    type: 'route',
                    to: '/tools'
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