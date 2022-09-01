import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { TitleApp } from './components/TitleApp';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch']);

  return (
    <div className="container">
        {/* title */}
        <TitleApp title='Gif Expert App'/>

        {/* input */}
        <AddCategory className='col-6'/>

    </div>
  )
}


