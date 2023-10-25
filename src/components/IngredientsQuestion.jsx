import React from 'react'
import { motion } from 'framer-motion'
import Chip from './Chip.jsx'
import PrimaryInput from './PrimaryInput.jsx'
import SearchProductDropdown from './SearchProductDropdown.jsx'
import { useEffect, useState } from 'react'

const getUniqueArrayFrom = (array) => {
  return Array.from(new Set(array))
}

const IngredientsQuestion = ({ title, name, motionKey, setIngredients, ingredients = [] }) => {

  const [ingredientsCopy, setIngredientsCopy] = useState(ingredients)

  useEffect(() => {
    setIngredientsCopy(ingredients)
  }, [ingredients])


  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={'py-[55px] px-[40px] bg-secondary rounded-[15px] mb-[25px]'}
    >
      <h1 className={'text-2xl leading-[42px] mb-[18px]'}>{title}</h1>
      <div className={'mb-[15px]'}>
        <SearchProductDropdown
          name={name}
          setChosenProducts={setIngredients}
          placeholder={'Enter ingredients'}
          withIcon={false}
        />
      </div>
      <p className={'font-roboto text-sm leading-[21px] mb-[25px]'}>Enter up to 10 ingredients</p>
      <div className={'flex flex-wrap gap-[18px]'}>
        {getUniqueArrayFrom(ingredientsCopy).map((item, idx) => (
          <Chip key={idx} title={item.name} />
        ))}
      </div>
    </motion.div>
  )
}

export default IngredientsQuestion
