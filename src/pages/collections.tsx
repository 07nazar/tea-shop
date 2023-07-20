import { CollectionsPage } from '@/components/screens/collections'
import Head from 'next/head'

export default function Collections() {
  return (
    <>
      <Head>
        <title>Collections</title>
        <meta name="description" content="Collections of tea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CollectionsPage />
    </>
  )
}
