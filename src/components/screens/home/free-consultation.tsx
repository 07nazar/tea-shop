import styles from './styles/free-consultation.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
export const FreeConsultation = () => {
  return (
    <section className={styles.free_consultation}>
      <div className={styles.free_consultation_info}>
        <h2 className={styles.title}>FOR WHOLESALERS</h2>
        <p className={styles.description}>
          We offer loose tea leaves of the best quality for your business. With
          a choice of more than 450 different kinds of loose tea, we can make a
          sophisticated selection that fits exactly in your kind of
          establishment.
        </p>
        <Button variant={'outlined'} cls={styles.button}>
          <Link href={'/free-consultation'}>get A free consultation</Link>
        </Button>
      </div>
      <Image
        src={'/static/home/decore-2.png'}
        alt="decore"
        width={628}
        height={628}
      />
    </section>
  )
}
