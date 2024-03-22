import { PodcastDetailPros } from '@/podcasts.d'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'
import getPodcastDetail from '@/services/getPodcastDetail'

export default function usePodcastDetail (PodcastId: string) {
  const [podcastDetail, setPodcastDetail] = useState<PodcastDetailPros[]| Error >([])

  useEffect(() => {
    // Check if podcast detail exists in local storage
    const cookieMyPodcastsDetail = getLocalStorageWithExpiry('myPodcastsDetail')
    const cookieParser = cookieMyPodcastsDetail !== null && JSON.parse(cookieMyPodcastsDetail)

    if (cookieMyPodcastsDetail !== null) {
      // If podcast detail exists in local storage, set it in state
      setPodcastDetail(JSON.parse(cookieParser.value))
      return
    }

    async function fetchData () {
      try {
        // Fetch podcast detail from API
        const data = await getPodcastDetail(PodcastId)
        setPodcastDetail(data)

        // Store fetched data in local storage with author as key
        if (Array.isArray(data) && data[0] !== undefined) {
          const author = data[0]?.author?.replaceAll(' ', '-')
          const dataParser = JSON.stringify(data)

          if (author !== undefined) {
            setLocalStorageWithExpiry(author, dataParser, 1)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [PodcastId])

  return {
    podcastDetail
  }
}
