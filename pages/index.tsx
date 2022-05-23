import styles from '../styles/Home.module.css'

import BlogCard from '@/components/BlogCard'
import WelcomeHero from '@/components/WelcomeHero'
import { Post } from '@/types/index'
import { getAllFilesFrontMatter } from '@/utils/mdx'

type Props = {
  posts: Post[]
}

const text =
  ' Wolf quinoa pop-up copper mug ramps tattooed master cleanse yuccie. Roof party before they sold out offal selvage microdosing hexagon.'

export default function Home({ posts }: Props) {
  return (
    <div className={styles.home}>
      <WelcomeHero title="Single-origin blogging!" text={text} />
      <PostsSection posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter()
  return { props: { posts } }
}

function PostsSection({ posts }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h5>Recent Posts</h5>
      </div>
      <div className={styles.postContainer}>
        {posts.map((item, _idx) => (
          <BlogCard {...posts[_idx]} key={item.slug} />
        ))}
      </div>
    </section>
  )
}
