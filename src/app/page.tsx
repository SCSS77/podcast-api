'use client'

import usePodcast from '@/hooks/usePodcast'
import { ChangeEvent, useMemo, useState } from 'react'
import PodcastList from '@/components/PodcastList'

function HomeContent () {
  const { podcastEntries } = usePodcast()
  const [filterPodcast, setFilterPodcast] = useState<string | null>(null)
  const filterPodcastSearch = useMemo(() => {
    return typeof filterPodcast === 'string' && filterPodcast.length > 0
      ? podcastEntries?.filter(item => {
        return item.title.toLowerCase().includes(filterPodcast.toLowerCase()) ||
                item.author.toLowerCase().includes(filterPodcast.toLowerCase())
      })
      : podcastEntries
  }, [podcastEntries, filterPodcast])

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterPodcast(e.target.value)
  }

  return (
    <>
      <div className='podcasts-searcher'>
        <span className='podcasts-searcher__text'>
          {filterPodcastSearch?.length}
        </span>
        <input type='text' onChange={handleOnchange} placeholder='Filter podcast...' />
      </div>
      <section className='podcasts-content'>
        <ul className='podcasts-content__list'>
          {filterPodcastSearch?.map(content => (
            <li key={content.id} className='podcasts-content__item'>
              <PodcastList items={content} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default function Home () {
  return <HomeContent podcastEntries={[]} />
}
