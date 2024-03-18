import React from 'react'
import Image from 'next/image'
import { PodcastProps } from '@/podcasts'
import Link from 'next/link'

interface Props {
  items: PodcastProps
}

function PodcastList ({ items }: Props) {
  return (
    <Link href={`/podcast/${items.id}`}>
      <section className='podcasts-content'>
        <ul className='podcasts-content__list'>
          <li className='podcasts-content__item'>
            <Image width={100} height={100} src={items.image} alt='Podcast Cover' className='podcasts-content__image' />
            <h2 className='podcasts-content__title'>{items.title}</h2>
            <p className='podcasts-content__author'>
              Author: <span>{items.author}</span>
            </p>
          </li>
        </ul>
      </section>
    </Link>
  )
}

export default PodcastList
