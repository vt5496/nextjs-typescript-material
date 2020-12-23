import Link from 'next/link'

export default function Index() {
    return (
        <>
            <h1>Hello Next.js!</h1>
            <Link href={'/about'}>
                <a>About</a>
            </Link>
        </>
    )
}