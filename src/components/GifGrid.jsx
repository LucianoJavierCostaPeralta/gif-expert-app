import { useEffect } from "react"
import { getGif } from "../helpers/getGif"

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGif( category )
  }, [])

  return (
    <>
        <h3>{ category }</h3>
        <p>Hola Mundo</p>
    </>
  )
}
export default GifGrid
