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
            ],
            [
                {
                    id: 1,
                    text: 'Certifications',
                    icon: 'book',
                    type: 'route',
                    to: '/certifications'
                },
                {
                    id: 3,
                    text: 'Volunteering',
                    icon: 'handshake',
                    type: 'route',
                    to: '/voulenteering'
                },
                {
                    id: 2,
                    text: 'Company',
                    icon: 'logo',
                    type: 'route',
                    to: '/voulenteering'
                }
            ]
        ]
    },
    { 
        id: 2,
        text: 'Projects', 
        type: 'route',
        style: 'invisible',
        to: '/projects',
        dropdown: true,
        structure: [
            [
                {
                    id: 2,
                    text: 'Class Q&A',
                    icon: 'https://matssom.github.io/webdev-qa/logo.png',
                    type: 'route',
                    to: '/class-qa'
                },
                {
                    id: 1,
                    text: 'Coness website',
                    icon: 'https://static.wixstatic.com/media/44db30_c75778a243164d40a8a3f80726c2fb97~mv2.png/v1/fill/w_241,h_100,al_c,q_85,usm_0.66_1.00_0.01/coness.webp',
                    type: 'route',
                    to: '/coness'
                }
            ],
            [
                {
                    id: 1,
                    text: 'Browser Shell',
                    icon: 'code',
                    type: 'route',
                    to: '/browser-shell'
                },
                {
                    id: 2,
                    text: 'Accessible Reset',
                    icon: 'work',
                    type: 'route',
                    to: '/accessible-reset'
                },
                {
                    id: 3,
                    text: 'Storable State',
                    icon: 'work',
                    type: 'route',
                    to: '/storable-state'
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
                    text: 'Skills',
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