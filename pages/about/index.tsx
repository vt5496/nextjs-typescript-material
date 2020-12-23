import Link from 'next/link'

export default function About() {
    return (
        <>
            <h1>About</h1>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <Link href={'/post'}>
                <a>Post</a>
            </Link>
        </>
    )
}