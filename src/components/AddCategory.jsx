import { useState, useSyncExternalStore } from 'react'

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => setInputValue(e.target.value)

  const submit = (e) => e.preventDefault()

  return (
    <form onSubmit={(e) => submit(e)}>
        <input
        type='text'
        placeholder='Search gif'
        className='form-control rounded-0 border-0 my-3'
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
  )
}
