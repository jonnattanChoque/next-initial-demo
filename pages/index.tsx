import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <MainLayout>
      <DarkLayout>
        <Navbar />
      <h1 className={'title'}>
          Ir a  <Link href={'/about'}>About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

        <div className={'grid'}>
          <a href="https://nextjs.org/docs" className={'card'}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={'card'}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={'card'}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={'card'}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </DarkLayout>
    </MainLayout>
  )
}
