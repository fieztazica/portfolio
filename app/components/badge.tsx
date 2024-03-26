export default function Badge(props) {
    return (
        <a
            {...props}
            target="_blank"
            className="border border-mine-shaft-200 dark:border-mine-shaft-900 bg-mine-shaft-100 dark:bg-mine-shaft-950 rounded p-1 text-sm inline-flex items-center leading-4 no-underline hover:bg-mine-shaft-50 dark:hover:bg-mine-shaft-800 hover:border-mine-shaft-600"
        />
    )
}
