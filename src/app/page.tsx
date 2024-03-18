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
      <div className='podcastst-searcher'>
        <span className='podcastst-searcher__text'>
          {filterPodcastSearch?.length}
        </span>
        <input type='text' onChange={handleOnchange} placeholder='Filter podcast...' />
      </div>
      <section className='podcasts'>
        {filterPodcastSearch?.map(content => (
          <div key={content.id} className='podcasts-container'>
            <PodcastList items={content} />
          </div>
        ))}
      </section>
    </>
  )
}

export default function Home () {
  return <HomeContent podcastEntries={[]} />
}
