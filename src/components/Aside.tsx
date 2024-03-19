'use client'

import { PodcastDetailPros } from '@/podcasts.d'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  content: PodcastDetailPros,
  description: string,
  podcastId: string
}

export default function Aside ({ content, description, podcastId }: Props) {
  const { id, image, author, title } = content

  return (

    <aside className='podcast-detail-aside' key={id}>
      <div className='podcast-detail-aside__box'>
        <div className='podcast-detail-aside__box-content'>
          <Link href={`/podcast/${podcastId}`} prefetch={false}>
            <Image src={image} width={200} height={200} alt='' className='podcast-detail-aside__box-image' />
          </Link>

          <hr className='podcast-detail-aside__box-separator' />

          <div className='podcast-detail-aside__box-container'>
            <header>
              <h2 className='podcast-detail-aside__box-container-title'>{title}</h2>
              <small className='podcast-detail-aside__box-container-author'>by: {author}</small>
            </header>

            <hr className='podcast-detail-aside__box-separator' />

            <h3 className='podcast-detail-aside__box-title'>Description:</h3>

            <p className='podcast-detail-aside__box-subtitle'>{description}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
