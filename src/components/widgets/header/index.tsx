import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/widgets/header/navigation'
import { Actions } from '@/components/widgets/header/actions'
import styles from './styles/header.module.scss'
export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link href={'/'}>
        <Image
          priority={true}
          src={'/static/images/logoWithBrandL.png'}
          alt={'logo'}
          width={192}
          height={48}
        />
      </Link>
      <Navigation />
      <Actions />
    </header>
  )
}
