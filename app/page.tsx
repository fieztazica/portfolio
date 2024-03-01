import Image from 'next/image'
import avatarImg from 'app/avatar.jpg'
import Link from 'next/link'
import Badge from 'app/components/badge'
import { Suspense } from 'react'
import { getFieztDiscordStatus } from './db/queries'

async function DiscordCard() {
    let user = await getFieztDiscordStatus()
    if (!user) return null
    const statusColor =
        user.status === 'dnd'
            ? '#ED4245'
            : user.status === 'idle'
            ? '#FAA61A'
            : user.status === 'online'
            ? '#3BA55C'
            : '#747F8D'
    return (
        <div className="group flex w-full">
            <a
                href={'/discord'}
                target="_blank"
                className="border-2 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full transition-all"
            >
                <div className="flex items-center space-x-3">
                    <div className="relative h-16">
                        <Image
                            alt={`${user.username}_discord`}
                            src={user.avatar_url}
                            height={64}
                            width={64}
                            sizes="33vw"
                            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
                            priority
                        />
                        <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex relative h-6 w-6 items-center -top-6 -right-10">
                            <svg
                                height="22"
                                width="22"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    r="10"
                                    cx="11"
                                    cy="11"
                                    fill={statusColor}
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {user.username}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {user.status}
                        </p>
                    </div>
                </div>
                <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                    <ArrowIcon />
                </div>
            </a>
        </div>
    )
}

type ConnectLinkType = {
    title: string
    url: string
}

const connectLinks: ConnectLinkType[] = [
    { title: 'github', url: '/github' },
    { title: 'facebook', url: '/facebook' },
    { title: 'instagram', url: '/instagram' },
    { title: 'linkedin', url: '/linkedin' },
]

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

function ConnectLink({ title, url }: ConnectLinkType) {
    return (
        <a
            className="group flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
        >
            <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                <ArrowIcon />
            </div>
            <p className="h-7 ml-2">{title}</p>
        </a>
    )
}

export default function Page() {
    return (
        <section>
            <div className="flex md:flex-row flex-col space-x-4 space-y-4">
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                        hi, I'm Dat 👀
                    </h1>
                    <p className="prose prose-neutral dark:prose-invert">
                        {`I'm a student at `}
                        <Link target="_blank" href="https://www.hutech.edu.vn">
                            HUTECH
                        </Link>
                        {` and major in Software Engineering. `}
                        {`As a student, I currently improve my skills by making some pet projects with my friends at `}
                        <span>
                            <Badge href="https://github.com/Owlvernyte">
                                <img
                                    src={'nyte-logo.svg'}
                                    alt="Nyte Logo"
                                    aria-label="Nyte Logo"
                                    width={16}
                                    height={16}
                                    className="inline-flex"
                                />{' '}
                                <span className="ml-1">Owlvernyte</span>
                            </Badge>
                        </span>
                        {`. `}
                        {`I often take frontend tasks for those pet projects so I'd love to spend more time with backend tasks. I also enjoy making Discord bots with `}
                        <Link target="_blank" href="https://discord.js.org">
                            discord.js
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={avatarImg}
                        height={256}
                        width={256}
                        alt="fiezt avatar"
                        aria-label="fiezt avatar"
                        className="border-2 border-neutral-200 dark:border-neutral-700 min-w-32 min-h-32 rounded-full"
                        priority
                    />
                </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    {`These are what I familiar to (including what I've learned from school and self-learn):`}
                </p>
                <h4>Web Development</h4>
                <ul>
                    <li>JavaScript, TypeScript</li>
                    <li>React, Next.js</li>
                    <li>Express.js</li>
                    <li>ASP.NET Core</li>
                    <li>Java Spring Boot</li>
                </ul>
                <h4>Mobile Development</h4>
                <ul>
                    <li>Flutter</li>
                    <li>Java Android</li>
                </ul>
                <h4>DevOps</h4>
                <ul>
                    <li>Docker</li>
                    <li>Apache, Nginx, Caddy</li>
                </ul>
            </div>
            <a href="https://fiezt1492.github.io">
                <div
                    className={
                        'bg-no-repeat bg-cover bg-center my-4 px-16 py-24 rounded-md w-full flex justify-center border-2 border-neutral-200 dark:border-neutral-700'
                    }
                    style={{
                        backgroundImage: `url('/bg.gif')`,
                    }}
                >
                    <Image
                        src="/bumping.gif"
                        alt="Fiezt bumping gif"
                        width={1280}
                        height={720}
                        sizes="33vw"
                        className="max-w-64 w-64 h-full"
                    />
                </div>
            </a>
            <DiscordCard />
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                {connectLinks.map((c) => (
                    <li key={`connect:${c.title}`}>
                        <ConnectLink url={c.url} title={c.title} />
                    </li>
                ))}
                <li>
                    <ConnectLink
                        url={'mailto:fiezt@outlook.com'}
                        title={'email'}
                    />
                </li>
            </ul>
        </section>
    )
}
