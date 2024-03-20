import getPodcastDetail from '@/services/getPodcastDetail'
import React from 'react'

type Params = {
  params: {
    podcastId: string,
    episodeId: string
  }
}

export default async function episodeIdPage ({ params: { podcastId, episodeId } }: Params) {
  const podcastDetails = await getPodcastDetail(podcastId)

  const episodes = Object.fromEntries(
    Object.entries(podcastDetails).filter(([_, value]) => {
      return value.id === episodeId
    }
    ))

  const episodesValues = Object.values(episodes)[0]

  const { title, description, mediaType, episodeUrl } = episodesValues

  const hasHTML = /\n/i.test(description)
  let newDescription = ''

  if (hasHTML) {
    newDescription = description.replaceAll('\n', '<br />')
  }

  const descriptionContent = hasHTML
    ? <div className='' dangerouslySetInnerHTML={{ __html: newDescription }} />
    : <p className=''>{description}</p>

  return (
    <div className='podcast-detail-content'>
      <article className='podcast-detail-content-episode'>
        <h2 className='podcast-detail-content__title'>{title}</h2>
        {descriptionContent}
        {mediaType === 'audio' && (
          <audio src={episodeUrl} controls className='podcast-detail-content-episode__audio' />
        )}
      </article>
    </div>
  )
}
