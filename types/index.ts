export type FrontMatter = {
  title: string
  publishedAt: string
  summary?: string
  image: string
  tags: string[]
}

export type Post = FrontMatter & {
  slug: string
}
