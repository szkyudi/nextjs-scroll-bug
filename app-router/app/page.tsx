import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={styles.box}>1</div>
      <div className={styles.box}>2</div>
      <div className={styles.box}>3</div>
      <div className={styles.box}>4</div>
      <div className={styles.box}>5</div>
      <div className={styles.box}>6</div>
      <div className={styles.box}>7</div>
      <div className={styles.box}>8</div>
      <div className={styles.box}>9</div>
      <Link href="/about">About</Link>
    </div>
  )
}
