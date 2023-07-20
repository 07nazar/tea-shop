import styles from './styles/last-blog-posts.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const lastBlogPosts: {
  id: string
  src: string
  title: string
  description: string
  link: string
}[] = [
  {
    id: 'ADAFsfmkaflasfl',
    src: '/static/home/post-1.png',
    title: 'How to steep tea like a pro',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. ',
    link: '',
  },
  {
    id: 'AFasfmkpasfmp',
    src: '/static/home/post-2.png',
    title: 'All about tea aromas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. ',
    link: '',
  },
]

export const LastBlogPosts = () => {
  return (
    <section className={styles.last_blog_posts}>
      <h2 className={styles.title}>Last Blog Posts</h2>
      <div className={styles.items}>
        {lastBlogPosts.map((post) => {
          return (
            <div key={post.id} className={styles.item}>
              <Image src={post.src} alt={post.title} width={263} height={360} />
              <div className={styles.last_blog_posts_item_info}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link className={styles.link} href={`/post/${post.id}`}>
                  read more
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
