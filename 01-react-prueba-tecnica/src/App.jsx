import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fisrtWord}?size=50&color=red&json=true`

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handlClick = async () => {
    const newFact = await getRandomFact()
    refreshFact(newFact)
  }
  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handlClick}>Get New Fact</button>

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
