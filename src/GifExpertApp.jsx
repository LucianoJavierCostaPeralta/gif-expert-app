import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { TitleApp } from './components/TitleApp';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <div className="container">
        {/* title */}
        <TitleApp title='Gif Expert App'/>

        {/* input */}
        <AddCategory onNewCategory={ onAddCategory }/>


        {/* TEST */}
        <ol>
          {
            categories.map((cat) => <li key={cat}>{cat}</li>)
          }
        </ol>

    </div>
  )
}


