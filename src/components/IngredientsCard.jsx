import Chip from './Chip.jsx'
import propTypes from 'prop-types'
import { useEffect, useState } from 'react'

//TODO: extract out as a utility function
const getUniqueArrayFrom = (array) => {
  return Array.from(new Set(array))
}

const IngredientsCard = ({ ingredients = [] }) => {
  const [ingredientsCopy, setIngredientsCopy] = useState(ingredients)

  useEffect(() => {
    setIngredientsCopy(ingredients)
  }, [ingredients])

  //TODO: What should be the behaviour of clear all ?
  const onClearAll = () => setIngredientsCopy([])

  return (
    <div className={'rounded-[15px] bg-primary px-[15px] py-[35px] sm:p-[50px] h-full max-w-[511px]'}>
      <h1
        className={
          'font-bold text-xl sm:text-2xl leading-[26px] sm:leading-[42px] mb-[10px] sm:mb-[18px]'
        }
      >
        Your ingredients:
      </h1>
      <p
        className={
          'text-end underline hover:no-underline text-sm sm:text-lg cursor-pointer mb-[30px] sm:mb-[18px]'
        }
        onClick={onClearAll}
      >
        clear all
      </p>
      <div className={'flex gap-[15px] sm:gap-[18px] flex-wrap overflow-auto max-h-[228px]'}>
        {getUniqueArrayFrom(ingredientsCopy).map((item, idx) => (
          <Chip key={idx} title={item.name} />
        ))}
      </div>
    </div>
  )
}

IngredientsCard.propTypes = {
  ingredients: propTypes.array,
}

export default IngredientsCard
