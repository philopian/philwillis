import styles from './WelcomeHero.module.css'

export type Props = {
  title: string
  text: string
}

export default function WelcomeHero({ title, text }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.content}>{text}</p>
      </div>
    </section>
  )
}
