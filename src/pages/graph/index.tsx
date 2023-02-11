import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from "@/components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Graph() {
  return (
    <>
        <Layout>
            <h1>グラフ</h1>
        </Layout>
    </>
  )
}
