import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { TitleApp } from './components/TitleApp';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <div className="container-fluid ">

      <TitleApp title='Gif Expert App'/>

      <AddCategory onNewCategory={ onAddCategory }/>

      {
        categories.map((cat) => <GifGrid key={cat}  category={cat} />)
      }

    </div>
  )
}


