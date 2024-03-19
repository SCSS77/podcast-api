import getPodcastDetail from '@/services/getPodcastDetail'
import getPodcastList from '@/services/getPodcastList'
import Aside from '@/components/Aside'

interface Props {
  children: React.ReactNode,
  params: {
    podcastId: string
  }
}

export default async function podcastDetailsLayout ({ children, params: { podcastId } }: Props) {
  const [podcastDetail, podcast] = await Promise.all([
    getPodcastDetail(podcastId),
    getPodcastList()
  ])

  const filteredData = podcastDetail.filter(({ type }) => type === 'track')
  const podcastDescription = podcast.find(({ id }) => id === podcastId)

  const description = podcastDescription ? podcastDescription.description : 'No description available'

  return (
    <>
      <div className='podcast-detail-main'>
        <Aside content={filteredData[0]} description={description} podcastId={podcastId} />
        {children}
      </div>
    </>
  )
}

export async function generateMetadata ({ params: { podcastId } }: Props) {
  const podcastDetail = await getPodcastDetail(podcastId)

  if (Array.isArray(podcastDetail)) {
    const [{ title }] = podcastDetail.filter(({ type }) => type === 'track')
    return {
      title
    }
  }
}
