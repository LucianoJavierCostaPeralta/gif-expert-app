import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => setInputValue(e.target.value)

  const onsubmit = (e) => {
    const newInputValue = inputValue.trim()
    e.preventDefault()
    if(newInputValue.length <= 1) return;
    onNewCategory(newInputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={ onsubmit }>
        <input
            type='text'
            placeholder='Search gif'
            className='form-control rounded-0 border-0 my-3 p-2 w-75 m-auto text-center '
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
