import styles from '@/styles/Home.module.css'

type Props = {
  children: React.ReactNode
}

export default function Body({ children }: Props) {
  return <main className={styles.main}>{children}</main>
}
