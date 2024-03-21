import { PodcastDetail, PodcastEpisodeDetail } from '@/podcasts.d'

export default async function getPodcastDetail (podcastId: string): Promise<PodcastDetail[] | Error> {
  const params = new URLSearchParams({
    id: podcastId,
    media: 'podcast',
    entity: 'podcastEpisode',
    limit: ''
  })

  try {
    const res = await fetch(`https://itunes.apple.com/lookup?${params}`)
    if (!res.ok) throw new Error('Failed to fetch')
    const data: { results: PodcastEpisodeDetail[] } = await res.json()

    const podcastDetail: PodcastDetail[] = data.results.map(detail => {
      const { wrapperType, artistName, trackCount, artworkUrl600, releaseDate, trackName, trackTimeMillis, description, episodeGuid, episodeContentType, episodeUrl } = detail
      if (wrapperType === 'track') {
        return {
          type: wrapperType,
          author: artistName,
          episodes: trackCount,
          image: artworkUrl600,
          release: releaseDate,
          title: trackName,
          duration: trackTimeMillis
        }
      } else {
        return {
          type: wrapperType,
          description,
          image: artworkUrl600,
          id: episodeGuid,
          release: releaseDate,
          title: trackName,
          duration: trackTimeMillis,
          mediaType: episodeContentType,
          episodeUrl
        }
      }
    })

    return podcastDetail
  } catch (error) {
    return new Error('Failed to fetch')
  }
}
