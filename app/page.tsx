import Image from 'next/image'
import avatarImg from './avatar.jpg'
import Link from 'next/link'

type ConnectLinkType = {
    title: string
    url: string
}

const connectLinks: ConnectLinkType[] = [
    { title: 'github', url: 'https://github.com/fiezt1492' },
    { title: 'facebook', url: 'https://www.facebook.com/fieztazica' },
    { title: 'instagram', url: 'https://www.instagram.com/_fiezt' },
    { title: 'linkedin', url: 'https://www.linkedin.com/in/fiezt' },
    { title: 'email', url: 'mailto:fiezt@outlook.com' },
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
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
        >
            <ArrowIcon />
            <p className="h-7 ml-2">{title}</p>
        </a>
    )
}

function Badge(props) {
    return (
        <a
            {...props}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline hover:bg-neutral-700 hover:border-neutral-600"
        />
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
                        aria-label='fiezt avatar'
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
            <div
                className={
                    'bg-no-repeat bg-cover bg-center my-4 px-16 py-24 overflow-hidden rounded-md w-full flex justify-center'
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
                    sizes='33vw'
                    className="max-w-64 mx-8 my-0 md:mx-16 md:my-8"
                />
            </div>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                {connectLinks.map((c) => (
                    <li key={`connect:${c.title}`}>
                        <ConnectLink url={c.url} title={c.title} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
