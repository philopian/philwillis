import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import styles from '@/styles/Home.module.css'
import { FrontMatter } from '@/types/index'
import { getFiles, getFileBySlug } from '@/utils/mdx'

// *NOTE: In order to load React components in the MDX files you need to pass them in
function Hello() {
  return <div>I&apos;m a React Component!!</div>
}

const MdxComponentList = { Hello }

type BlogSlugProps = {
  code: string
  frontMatter: FrontMatter
}
export default function BlogSlug({ code, frontMatter }: BlogSlugProps) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  const { title, summary } = frontMatter
  return (
    <main className={styles.main}>
      <header>
        <h2>{title}</h2>
        {summary && <p>{summary}</p>}
      </header>
      <article className="prose dark:prose-invert">
        <Component components={{ ...MdxComponentList }} />
      </article>
    </main>
  )
}

// we will generate all the blogs at build time.
export async function getStaticPaths() {
  const posts = await getFiles()

  return {
    paths: posts.map((p) => ({ params: { slug: p.replace(/\.mdx/, '') } })),
    fallback: false,
  }
}

type StaticProps = {
  params: { slug: string }
}
export async function getStaticProps({ params }: StaticProps) {
  const post = await getFileBySlug(params.slug)
  return { props: { ...post } }
}
