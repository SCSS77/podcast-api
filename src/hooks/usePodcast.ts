import getPodcastList from '@/services/getPodcastList'
import { PodcastProps } from '@/podcasts'
import { useEffect, useState, useCallback } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'
import useLoading from './useLoading'

export default function usePodcast () {
  const [podcastEntries, setPodcastEntries] = useState<PodcastProps[] | null>(null)
  const { setLoading } = useLoading()

  const fetchData = useCallback(async () => {
    try {
      // Attempt to retrieve podcast entries from local storage
      const cookieValue = getLocalStorageWithExpiry('myPodcasts')
      if (cookieValue) {
        const parsedValue = cookieValue !== null && JSON.parse(cookieValue)
        setPodcastEntries(JSON.parse(parsedValue.value))
        setLoading(false)
      } else {
        // If no entries found in local storage, fetch data from API
        const data: PodcastProps[] = await getPodcastList()
        setPodcastEntries(data)
        setLocalStorageWithExpiry('myPodcasts', JSON.stringify(data), 1)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [setLoading])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    podcastEntries
  }
}
