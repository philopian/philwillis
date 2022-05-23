import Link from 'next/link'

import styles from './BlogCard.module.css'

import { Post } from '@/types/index'

export default function BlogCard({ image, slug, title, summary, tags }: Post) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Link href={`/posts/${slug}`}>
          <a className={styles.link} data-testid="image-link">
            <img src={image} alt="cover image" />
          </a>
        </Link>
      </div>

      <div className={styles.details}>
        <Link href={`/posts/${slug}`}>
          <a className={styles.link} data-testid="title-link">
            <h5 className={styles.title}>{title}</h5>
          </a>
        </Link>
        {summary && (
          <p className={styles.summary} data-testid="summary">
            {summary}
          </p>
        )}
        <div className={styles.tagContainer}>
          {tags.map((tag: string) => (
            <span className={styles.tags} key={tag} role="tags">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
