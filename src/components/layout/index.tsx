import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/widgets/header'
import { Footer } from '@/components/widgets/footer'
import styles from './layout.module.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
