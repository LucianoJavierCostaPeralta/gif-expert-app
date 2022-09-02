import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { getGif } from "../helpers/getGif"

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGif(category)
    setImages(newImages)
    console.log(newImages);
  }

  useEffect(() => {
    getImages();
  }, [])

  return (
    <>
        <h3>{category}</h3>
        <div className="row">
          {
            images.map((image) =>(
              <GifItem key={image.id} {...image}/>
            ))
          }
        </div>
    </>
  )
}
export default GifGrid
