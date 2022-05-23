import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import { join } from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

const POST_FOLDER_NAME = '_posts_'

export async function getFiles() {
  return readdirSync(join(process.cwd(), POST_FOLDER_NAME))
}

export async function getFileBySlug(slug: string) {
  const source = readFileSync(join(process.cwd(), POST_FOLDER_NAME, `${slug}.mdx`), 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
      ]
      return options
    },
  })

  return {
    code,
    frontMatter: { slug: slug || null, ...frontmatter },
  }
}

export async function getAllFilesFrontMatter() {
  const files = readdirSync(join(process.cwd(), POST_FOLDER_NAME))

  return files.reduce((allPosts: any, postSlug: string) => {
    const filePath = join(process.cwd(), POST_FOLDER_NAME, postSlug)
    const source = readFileSync(filePath, 'utf8')
    const { data } = matter(source)
    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
  }, [])
}
