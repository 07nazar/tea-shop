import Image from 'next/image'
import styles from './styles/decore.module.scss'
export const Decore = () => {
  return (
    <div className={styles.decore}>
      <Image
        src={'/static/collections/decore.png'}
        alt={'decore'}
        width={1280}
        height={308}
      />
    </div>
  )
}
