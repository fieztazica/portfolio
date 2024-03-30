import Badge from 'app/components/badge'
import logoImg from 'app/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from './components/avatar'
import { getFieztDiscordStatus } from './db/queries'
import hutech_od1 from 'public/images/2024/Mar29/IMG_20240329_142602.jpg'
import hutech_od2 from 'public/images/2024/Mar29/IMG_20240329_163947.jpg'
import codemely from 'public/images/2023/code_mely_offline_1st.jpg'
import cyf from 'public/images/2023/code_your_future.jpg'
import hutech_cyf from 'public/images/2023/hutech_cyf.jpg'
import near_apac from 'public/images/2023/near_apac.jpg'

async function Card({ img, link, title, des, badgeSvg }) {
    return (
        <div className="group flex w-full">
            <a
                href={link}
                target="_blank"
                className="border-2 border-mine-shaft-200 dark:border-mine-shaft-700 bg-mine-shaft-50 dark:bg-mine-shaft-950 rounded flex items-center justify-between px-3 py-4 w-full transition-all"
            >
                <div className="flex items-center space-x-3">
                    <div className="relative h-16">
                        <Image
                            alt={`${title}_card_title`}
                            src={img}
                            height={64}
                            width={64}
                            sizes="33vw"
                            className="border border-mine-shaft-200 dark:border-mine-shaft-700 rounded-full h-16 w-16"
                            priority
                        />
                        <div className="border border-mine-shaft-200 dark:border-mine-shaft-700 rounded-full bg-white inline-flex relative p-1 h-6 w-6 items-center -top-6 -right-10">
                            {badgeSvg ? badgeSvg : null}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-mine-shaft-900 dark:text-mine-shaft-100">
                            {title}
                        </p>
                        {des && (
                            <p className="text-mine-shaft-600 dark:text-mine-shaft-400">
                                {des}
                            </p>
                        )}
                    </div>
                </div>
                <div className="text-mine-shaft-700 dark:text-mine-shaft-300 transform transition-transform duration-300 group-hover:-rotate-12">
                    <ArrowIcon />
                </div>
            </a>
        </div>
    )
}

async function DiscordCard() {
    let user = await getFieztDiscordStatus()
    const statusColor =
        user.status === 'dnd'
            ? 'bg-[#ED4245]'
            : user.status === 'idle'
            ? 'bg-[#FAA61A]'
            : user.status === 'online'
            ? 'bg-[#3BA55C]'
            : 'bg-[#747F8D]'
    return (
        <Card
            link={'/discord'}
            img={user.avatar_url}
            title={user.username}
            des={user.status}
            badgeSvg={
                <div
                    className={`w-full h-full aspect-square rounded-full ${statusColor}`}
                ></div>
            }
        />
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
    { title: 'twitter', url: '/twitter' },
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
            className="group flex items-center hover:text-mine-shaft-800 dark:hover:text-mine-shaft-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
        >
            <div className="text-mine-shaft-700 dark:text-mine-shaft-300 transform transition-transform duration-300 group-hover:-rotate-12">
                <ArrowIcon />
            </div>
            <p className="h-7 ml-2">{title}</p>
        </a>
    )
}

export default function Page() {
    return (
        <section className="text-justify">
            <div className="flex md:flex-row flex-col space-x-4 space-y-4">
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                        hi, I'm <span>Dat</span> 👀
                    </h1>
                    <p className="prose prose-mine-shaft dark:prose-invert">
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
                    <Avatar />
                </div>
            </div>
            <div className="my-8 columns-1 gap-2 sm:columns-2">
                <div className="relative h-48 mb-2">
                    <Image
                        alt="Me with Owlvernyte participating in IT HUTECH OPEN DAY 2024"
                        src={hutech_od1}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-48 mb-2">
                    <Image
                        alt="Still me with Owlvernyte at IT HUTECH OPEN DAY 2024"
                        src={hutech_od2}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-48 mb-2">
                    <Image
                        alt="Me with team members of ProfioApp checked in at CJ OliveNetworks"
                        src={cyf}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-48 mb-2">
                    <Image
                        alt="Me with team members of ProfioApp at HUTECH"
                        src={hutech_cyf}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-48 mb-2">
                    <Image
                        alt="First offline meeting of Code Mely in HCM"
                        src={codemely}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-48 mb-2">
                    <Image
                        alt="Code Mely at Near APAC 2024"
                        src={near_apac}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="prose prose-mine-shaft dark:prose-invert">
                <p>
                    {`These are what I familiar with (including what I've learned from school and self-learn):`}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="row-span-2">
                        <h4>Web Development</h4>
                        <ul>
                            <li>JavaScript, TypeScript</li>
                            <li>React, Next.js</li>
                            <li>Express.js</li>
                            <li>ASP.NET Core</li>
                            <li>Java Spring Boot</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Mobile Development</h4>
                        <ul>
                            <li>Flutter</li>
                            <li>Java Android</li>
                        </ul>
                    </div>
                    <div>
                        <h4>DevOps</h4>
                        <ul>
                            <li>Docker</li>
                            <li>Apache, Nginx, Caddy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="https://fieztazica.github.io">
                <div
                    className={
                        'bg-no-repeat bg-cover bg-center my-4 px-16 py-24 rounded-md w-full flex justify-center border-2 border-mine-shaft-200 dark:border-mine-shaft-700'
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
            <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                <DiscordCard />
                <Card
                    img={logoImg}
                    link={'/youtube'}
                    title={'@Fiezt'}
                    des={'video, music, gaming, ...'}
                    badgeSvg={
                        <svg
                            width="15"
                            height="11"
                            role="img"
                            aria-label="YouTube logo"
                        >
                            <use href="/sprite.svg#youtube" />
                        </svg>
                    }
                />
            </div>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-mine-shaft-600 dark:text-mine-shaft-300">
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
