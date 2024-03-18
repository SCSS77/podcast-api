import getPodcastList from '@/services/getPodcastList'
import { PodcastProps } from '@/podcasts'
import { useEffect, useState, useCallback } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'
import useLoadingBounce from './useLoadingBounce'

export default function usePodcast () {
  const [podcastEntries, setPodcastEntries] = useState<PodcastProps[] | null>(null)
  const { setLoading } = useLoadingBounce()

  const fetchData = useCallback(async () => {
    try {
      const cookieValue = getLocalStorageWithExpiry('myPodcasts')
      if (cookieValue) {
        const parsedValue = cookieValue !== null && JSON.parse(cookieValue)
        setPodcastEntries(JSON.parse(parsedValue.value))
        setLoading(false)
      } else {
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