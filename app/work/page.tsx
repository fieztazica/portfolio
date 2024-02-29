import { Metadata } from 'next'

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
            <p className="prose prose-neutral dark:prose-invert">
                Coming soon.
            </p>
        </section>
    )
}
