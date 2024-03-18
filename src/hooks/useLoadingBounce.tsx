import { useEffect, useState } from 'react'

export default function useLoadingBounce () {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return {
    loading,
    setLoading
  }
}
