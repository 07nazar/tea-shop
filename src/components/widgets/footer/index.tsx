import Link from 'next/link'
import styles from './styles/footer.module.scss'

const listItems: {
  title: string
  children: {
    value: string
    href: string
  }[]
}[] = [
  {
    title: 'Collections',
    children: [
      { value: 'Black teas', href: '' },
      { value: 'Green teas', href: '' },
      { value: 'White teas', href: '' },
      { value: 'Herbal teas', href: '' },
      { value: 'Matcha', href: '' },
      { value: 'Chai', href: '' },
      { value: 'Oolong', href: '' },
      { value: 'Rooibos', href: '' },
      { value: 'Teaware', href: '' },
    ],
  },
  {
    title: 'Learn',
    children: [
      { value: 'About us', href: '' },
      { value: 'About our teas', href: '' },
      { value: 'Tea academy', href: '' },
    ],
  },
  {
    title: 'Customer Service',
    children: [
      { value: 'Ordering and payment', href: '' },
      { value: 'Delivery', href: '' },
      { value: 'Privacy and policy', href: '' },
      { value: 'Terms & Conditions', href: '' },
    ],
  },
  {
    title: 'Contact us',
    children: [
      {
        value:
          '3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence Iran',
        href: '',
      },
      { value: 'Email: amoopur@gmail.com', href: '' },
      { value: 'Tel: +98 9173038406 ', href: '' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className={`${styles.footer_wrapper}`}>
      <div className={`${styles.footer} container`}>
        <div className={styles.list}>
          {listItems.map((list) => {
            return (
              <div key={list.title} className={styles.item}>
                <h5 className={styles.title}>{list.title}</h5>
                <nav className={styles.links}>
                  {list.children.map((child, index) => {
                    return (
                      <Link
                        className={styles.link}
                        key={child.href + '_' + index}
                        href={child.href}
                      >
                        {child.value}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
