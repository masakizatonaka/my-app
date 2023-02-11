import Link from 'next/link'

export default function Layout() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/todo">Todo</Link>
            <Link href="/graph">グラフ</Link>
        </>
    )
}