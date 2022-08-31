import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);

  return (
    <>
        {/* title */}
        <h1 className="text-center my-4 text-uppercase">
          GifExpertApp
        </h1>

    </>
  )
}


