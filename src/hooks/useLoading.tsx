import { useEffect, useState } from 'react'

export default function useLoading () {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return {
    loading,
    setLoading
  }
}
