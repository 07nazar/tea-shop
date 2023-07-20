import React from 'react'
import Image from 'next/image'
import styles from './styles/collections.module.scss'

const collectionsData: { title: string; src: string }[] = [
  { title: 'black tea', src: '/static/home/collection-01.png' },
  { title: 'Green tea', src: '/static/home/collection-02.png' },
  { title: 'white tea', src: '/static/home/collection-03.png' },
  { title: 'matcha', src: '/static/home/collection-04.png' },
  { title: 'herbal tea', src: '/static/home/collection-05.png' },
  { title: 'chai', src: '/static/home/collection-06.png' },
  { title: 'oolong', src: '/static/home/collection-07.png' },
  { title: 'rooibos', src: '/static/home/collection-08.png' },
  { title: 'teaware', src: '/static/home/collection-09.png' },
]
export const Collections = () => {
  return (
    <section className={styles.collections}>
      <h2 className={styles.title}>Our Collections</h2>
      <div className={styles.grid}>
        {collectionsData.map((collection) => {
          return (
            <div className={styles.item} key={collection.title}>
              <Image
                src={collection.src}
                alt={collection.title}
                width={360}
                height={360}
              />
              <h6 className={styles.item_title}>{collection.title}</h6>
            </div>
          )
        })}
      </div>
    </section>
  )
}
