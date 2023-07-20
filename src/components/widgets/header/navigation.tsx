import styles from './styles/navigation.module.scss'
import Link from 'next/link'

const navItems: { text: string; to: string }[] = [
  { text: 'tea collections', to: '/collections' },
  { text: 'accessories', to: '/collections' },
  { text: 'blog', to: '/collections' },
  { text: 'contact us', to: '/collections' },
]

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => {
        return (
          <Link className={styles.link} href={item.to} key={item.text}>
            {item.text}
          </Link>
        )
      })}
    </nav>
  )
}
