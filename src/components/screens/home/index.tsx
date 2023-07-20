import { Collections } from '@/components/screens/home/collections'
import { AboutUs } from '@/components/screens/home/about-us'
import { Hero } from '@/components/screens/home/hero'
import { LastBlogPosts } from '@/components/screens/home/last-blog-posts'
import { FreeConsultation } from '@/components/screens/home/free-consultation'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Collections />
      <LastBlogPosts />
      <FreeConsultation />
    </>
  )
}
