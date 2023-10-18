import React, { useEffect } from 'react'
import axios from 'axios'
import propTypes from 'prop-types'
import ProductDropdownResult from './ProductDropdownResult.jsx'
import PrimaryInput from './PrimaryInput.jsx'
import { useDebounce } from '../hooks/useDebounce.js'

const apiKey = import.meta.env.VITE_API_KEY

const SearchProductDropdown = ({ setChosenProducts }) => {
  const [products, setProducts] = React.useState([])
  const [textInput, setTextInput] = React.useState('')
  const debouncedTextInput = useDebounce(textInput, 500)



  const handleChange = async (event) => {
    const query = event.target.value
    setTextInput(query)
    //await fetchProducts()
  }

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${debouncedTextInput}&number=4&apiKey=${apiKey}`,
      )
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = (product) => {
    //add to ingredients
    setChosenProducts((prevState) => [...prevState, product])
    //remove from dropdown suggestions
    setProducts((prevState) => prevState.filter((item) => item.name !== product.name))
  }

  useEffect(() => {
    if (debouncedTextInput) fetchProducts()
  }, [debouncedTextInput])

  //TODO: get api call details
  return (
    <div className={'relative w-full'}>
      <div className={'relative z-10'}>
        <PrimaryInput onChange={handleChange} placeholder={'Enter ingredients'} />
      </div>
      <div className={'flex flex-col mt-[-5px] absolute w-full rounded-b-[12px]'}>
        {textInput &&
          products.map((item, idx) => (
            <ProductDropdownResult
              onClick={() => handleClick(item)}
              key={item.id}
              text={item.name}
              lastResult={idx === products.length - 1}
            />
          ))}
      </div>
    </div>
  )
}

SearchProductDropdown.propTypes = {
  setChosenProducts: propTypes.func,
}

export default SearchProductDropdown
