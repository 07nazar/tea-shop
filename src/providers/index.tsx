import { FC, PropsWithChildren } from 'react'
import { Layout } from '@/components/layout'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>
}
