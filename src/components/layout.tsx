import Link from 'next/link'
import Header from './header'
import { ReactElement } from 'react'
type LayoutProps = Required<{
    readonly children: ReactElement
}>
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            < Header/>
            {children}
        </>
    )
}