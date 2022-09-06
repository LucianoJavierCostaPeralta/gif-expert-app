import { useEffect, useState } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"
// import { getGif } from "../helpers/getGif"

const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)
  console.log({
    images, isLoading
  });

  return (
    <>
        <h3 className="text-center my-2 text-uppercase">{category}</h3>
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
