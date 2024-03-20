import getPodcastDetail from '@/services/getPodcastDetail'
import React from 'react'

type Params = {
  params: {
    podcastId: string,
    episodeId: string
  }
}

export default async function episodeIdPage ({ params: { podcastId, episodeId } }: Params) {
  try {
    const podcastDetails = await getPodcastDetail(podcastId)

    const episodesValues = podcastDetails.find(detail => detail.id === episodeId)

    if (!episodesValues) {
      throw new Error('Episode not found')
    }

    const { title, description, mediaType, episodeUrl } = episodesValues

    const hasHTML = /\n/i.test(description)
    const descriptionContent = hasHTML
      ? <div className='' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
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
  } catch (error) {
    console.error('Error fetching podcast detail:', error)
    return <div>Error fetching podcast detail</div>
  }
}
