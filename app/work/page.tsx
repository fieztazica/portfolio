import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Work',
    description: 'A summary of my work and contributions.',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                my work
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Undergraduate students (GPA 3.44). Graduate in 2024, seeking
                    for internship or fresher position.
                </p>
                <Hr />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">
                    Code MeLy
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Technical Member, Aug 2022 — Dec 2023
                </p>
                <p>
                    <a href="https://github.com/mely-apps">Code MeLy</a> is a
                    GenZ IT/Dev community in Vietnam. I joined early and help
                    them to build community. Before the time I joined, Code MeLy
                    was known as IT Town but its co-founders have decided to
                    renew their brand to attract the young IT generation. I
                    participated in as their Discord Server Administrator and
                    help them to setup, build a chat bot, grow{' '}
                    <a href="https://discord.gg/codemely">Discord Server</a>{' '}
                    community besides their Facebook{' '}
                    <a href="https://www.facebook.com/code.mely">page</a> and{' '}
                    <a href="https://www.facebook.com/groups/devoiminhdidauthe">
                        group
                    </a>
                    .
                </p>
                <p>
                    {`I'm currently not active on their Facebook page, group anymore
                    due to my huge amount of school projects in late 2023 but I
                    still moderate the Discord server as Administrator.`}
                </p>
                <Hr />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">
                    ProfioApp
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Frontend, Aug 2023 — Nov 2023
                </p>
                <p>
                    We (5 members) did this project for an IT Contest{' '}
                    <a href="https://www.linkedin.com/posts/cj-olivenetworks-vina_itcontest-codeabryourabrfuture-cjvietnamhq-activity-7117777134567256067-CB5n">
                        Code Your Future
                    </a>{' '}
                    organized by{' '}
                    <a href="https://www.linkedin.com/company/cj-olivenetworks-vina">
                        CJ OliveNetworks Vina
                    </a>{' '}
                    in just 3 months and rewarded the 'real' third prize.{' '}
                    {`My job
                    is to handle the CMS/Dashboard which is written with Next.js of this
                    project.`}
                </p>
                <Hr />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">
                    Vietnamese Chess
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Frontend, Sep 2023 — Now
                </p>
                <p>
                    An Owlvernyte team's school project (7 members).{' '}
                    <a href="https://cotuong-nyte.vercel.app">
                        Vietnamese chess
                    </a>{' '}
                    has both stunning look and smooth experience.
                </p>
                <p>
                    As the frontend team leader, I mostly design, code the play
                    board, divide member tasks and concatenate their tasks.
                </p>
            </div>
        </section>
    )
}

function Hr() {
    return <hr className="my-6 border-neutral-100 dark:border-neutral-700" />
}
