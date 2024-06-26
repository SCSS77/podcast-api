'use client'

import usePodcastDetail from '@/hooks/usePodcastDetail'
import { getDateFormatter } from '@/utils/dateFormat'
import { getDurationFormat } from '@/utils/durationFormat'
import Link from 'next/link'
// import useLoading from '@/hooks/useLoading'

type Params = {
  params: {
    podcastId: string
  }
}

export default function PodcastDescriptionPage ({ params: { podcastId } }: Params) {
  const { podcastDetail } = usePodcastDetail(podcastId)
  // const { loading } = useLoading()

  if (!podcastDetail) return null

  const dataArrayValues = podcastDetail && Object.values(podcastDetail)
  const featurePodcastSummary = dataArrayValues && dataArrayValues.filter(detail => detail.type === 'track')

  const isValidURL = (text: string) => {
    const urlPattern = /http:|https:/i
    return urlPattern.test(text)
  }

  const customLink = (detailId: string) => {
    return isValidURL(detailId) ? detailId : `/podcast/${podcastId}/episode/${detailId}`
  }

  // if (loading) return null
  return (
    <div className='podcasts-main'>
      <div className='podcast-detail-content'>
        <div className='podcast-detail-content__title'>
          Episodes: <span>{featurePodcastSummary[0]?.episodes || 0}</span>
        </div>
        <hr className='podcast-detail-content__separator' />
        <div className='podcast-detail-content__list'>
          <div className='podcast-detail-content__list-container'>
            <div className='podcast-detail-content__list-subtitles'>
              <div>Title</div>
              <div>Date</div>
              <div>Duration</div>
            </div>
            <ul className='podcast-detail-content__list-details'>
              {dataArrayValues && dataArrayValues.filter(item => item.type !== 'track').map((detail, index) =>
                <li key={index} className={`${index % 2 === 0 ? 'podcast-detail-content__list-details-item even' : 'podcast-detail-content__list-details-item odd'}`}>
                  <div className='podcast-detail-content__list-details-title'>
                    <Link href={customLink(detail.id)}>
                      {detail.title}
                    </Link>
                  </div>
                  <div className='podcast-detail-content__list-details-release'>
                    {getDateFormatter(detail.release)}
                  </div>
                  <div className='podcast-detail-content__list-details-duration'>
                    {getDurationFormat(detail.duration)}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
