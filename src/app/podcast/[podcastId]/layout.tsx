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
  const podcastDetail = await getPodcastDetail(podcastId)
  const podcast = await getPodcastList()

  // get content of the podcast
  const filteredData = Object.fromEntries(
    Object.entries(podcastDetail).filter(([_, value]) => value.type === 'track')
  )

  // get content description
  const podcastDescription = Object.fromEntries(
    Object.entries(podcast).filter(([_, value]) => value.id === podcastId
    )
  )

  // get description or show error message
  const description = (Object.keys(podcastDescription).length > 0) ? Object.values(podcastDescription)[0].description : 'No description available'

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
