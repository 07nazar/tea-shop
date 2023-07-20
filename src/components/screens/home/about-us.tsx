import styles from './styles/about-us.module.scss'
import Image from 'next/image'
import ShippingIcon from 'public/static/svg/local_shipping.svg'
import CoffeeIcon from 'public/static/svg/local_cafe.svg'
import RedeemIcon from 'public/static/svg/redeem.svg'
import SellIcon from 'public/static/svg/sell.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const aboutUsItems: { svg: any; text: string }[] = [
  { svg: CoffeeIcon, text: '450+ KIND OF LOOSEF TEA' },
  { svg: RedeemIcon, text: 'CERTIFICATED ORGANIC TEAS' },
  { svg: ShippingIcon, text: 'FREE DELIVERY' },
  { svg: SellIcon, text: 'SAMPLE FOR ALL TEAS' },
]

export const AboutUs = () => {
  return (
    <section className={styles.about_us_wrapper}>
      <div className={`container ${styles.about_us}`}>
        <div className={styles.items}>
          {aboutUsItems.map((item, index) => {
            return (
              <div className={styles.item} key={item.text}>
                <Image
                  src={item.svg}
                  alt={`about-us-icon-${index}`}
                  width={24}
                  height={24}
                />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
        <Button variant={'outlined'} cls={styles.button}>
          <Link className={styles.link} href={'/about-us'}>
            Learn more
          </Link>
        </Button>
      </div>
    </section>
  )
}
