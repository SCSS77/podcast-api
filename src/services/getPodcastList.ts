import { Podcast } from '@/podcasts'

// Connect to iTunes to get the list of podcasts and export it, if something fails, show error messages

export default async function getPodcastList () {
  try {
    const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')

    if (!res.ok) {
      throw new Error('Fetch failed')
    }

    const data: Podcast = await res.json()

    const listOfPodcasts = data.feed.entry.map(item => {
      return {
        id: item.id.attributes['im:id'],
        title: item['im:name'].label,
        author: item['im:artist'].label,
        image: item['im:image'][2].label,
        description: item.summary.label
      }
    })

    return listOfPodcasts
  } catch (error) {
    console.error('Error occurred while fetching podcasts:', error)
    return []
  }
}
