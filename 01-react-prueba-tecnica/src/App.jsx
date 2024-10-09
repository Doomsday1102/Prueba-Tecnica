import { useState, useEffect } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fisrtWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // recuperar la cita
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // recuperar imagen por cada vez que se saca una cita
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

  return (
    <main>
      <h1>App de Gatitos</h1>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image Extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}
