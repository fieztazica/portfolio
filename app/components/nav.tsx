import Link from 'next/link'
import ThemeSwitcher from './theme-switcher'

const navItems = {
    '/': {
        name: 'home',
        target: '',
    },
    '/work': {
        name: 'work',
        target: '',
    },
    '/resume': {
        name: 'resume',
        target: '_blank',
    },
    //   '/blog': {
    //     name: 'blog',
    //   },
    //   '/guestbook': {
    //     name: 'guestbook',
    //   },
}

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative uppercase"
                    id="nav"
                >
                    <div className="flex flex-row space-x-2 pr-10">
                        {Object.entries(navItems).map(
                            ([path, { name, target }]) => {
                                return (
                                    <Link
                                        key={path}
                                        href={path}
                                        target={target || '_self'}
                                        className="w-fit transition-all hover:text-mine-shaft-800 dark:hover:text-mine-shaft-200 flex align-middle relative py-1 px-2 before:block before:bg-mine-shaft-900 before:inset-y-0 before:absolute before:w-0 hover:before:w-full before:h-1 before:left-0 before:top-0 before:rounded-sm before:transition-all before:-translate-x-full hover:before:translate-x-0"
                                    >
                                        {name}
                                    </Link>
                                )
                            }
                        )}
                    </div>
                    {/* <div className="flex flex-row space-x-0">
                        <ThemeSwitcher className="transition-all hover:text-mine-shaft-800 dark:hover:text-mine-shaft-200 flex align-middle relative py-1 px-2" />
                    </div> */}
                </nav>
            </div>
        </aside>
    )
}
