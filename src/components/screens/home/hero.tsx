import React from 'react'
import Image from 'next/image'
import styles from './styles/hero.module.scss'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className={styles.hero_wrapper}>
      <div className={`container ${styles.hero}`}>
        <Image
          src={'/static/home/decore-1.png'}
          alt={'hero'}
          width={628}
          height={628}
        />

        <aside className={styles.aside}>
          <h2 className={styles.title}>
            Every day is unique, just like our tea
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
            adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
            amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
            lacus nibh eros in.
          </p>
          <Button variant={'dark'} cls={styles.button}>
            <Link className={styles.link} href={'/collections'}>
              browes teas
            </Link>
          </Button>
        </aside>
      </div>
    </section>
  )
}
