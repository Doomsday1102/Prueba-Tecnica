import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red`
    ).then((response) => {
      const { url } = response
      console.log(response)
      setImageUrl(url)
    })
  }, [fact])
  return { imageUrl }
}
