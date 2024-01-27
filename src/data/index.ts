export type Href = {
    name: string
    href: string
}

export type HrefIcon = Href & {
    icon: string
}

const socials: HrefIcon[] = [
    {
        name: 'GitHub',
        icon: 'mdi:github',
        href: 'https://github.com/fiezt1492',
    },
    {
        name: 'LinkedIn',
        icon: 'mdi:linkedin',
        href: 'https://www.linkedin.com/in/fiezt/',
    },
    {
        name: 'Instagram',
        icon: 'mdi:instagram',
        href: 'https://instagram.com/fieztazica',
    },
    {
        name: 'Discord',
        icon: 'ic:baseline-discord',
        href: 'https://discord.com/users/445102575314927617',
    },
]

const navLinks: Href[] = [
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]

const about = {
    avatar_url: '/profile/me.jpg',
    name: 'Dat Hoang',
    bio: 'Student - Software Engineer at HUTECH.',
}

const emails = [
    'tiendat.dev@outlook.com',
    'hoangtiendat.dev@gmail.com',
    'fiezt@outlook.com',
    'fiezt@nyte.tk',
    'fiezt@skiff.com',
    'tiendat@skiff.com',
]

export { socials, navLinks, about, emails }
