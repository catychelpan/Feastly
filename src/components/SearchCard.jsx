import Chip from './Chip.jsx'
import SearchProductDropdown from './SearchProductDropdown.jsx'
import propTypes from 'prop-types'
import React from 'react'

const SearchCard = ({ setChosenProducts }) => {
  const [offeredOptions, setOfferedOptions] = React.useState([{ name: 'onion' }, { name: 'potato'}, { name: 'carrot' }])

  const removeOption = (option) => {
    //remove from offered options
    setOfferedOptions(offeredOptions.filter((item) => item.name !== option.name))
    //add to your ingredients
    setChosenProducts((prevState) => [...prevState, option])
  }

  return (
    <div className={'rounded-[15px] bg-secondary sm:p-[50px] px-[15px] py-[35px] basis-[55%]'}>
      <h1
        className={
          'font-bold text-xl sm:text-2xl leading-[26px] w-[70%] sm:w-full sm:leading-[42px] mb-[10px] sm:mb-[18px]'
        }
      >
        Tell us what ingredients you need to use up
      </h1>
      <p
        className={
          'font-roboto text-[16px] sm:text-base leading-[18px] sm:leading-[25px] mb-[40px] sm:mb-[50px]'
        }
      >
        Type the first ingredient you want to use up in the search box and pick the best match from
        the drop down.
      </p>
      <div className={'flex mb-[15px]'}>
        <SearchProductDropdown setChosenProducts={setChosenProducts} />
      </div>
      <p className={'font-roboto text-[16px] sm:text-sm leading-[21px] mb-[40px] sm:mb-[25px]'}>
        Enter 3 more ingredients to find your recipe
      </p>
      <h1
        className={'text-[28px] sm:text-2xl leading-[26px] sm:leading-[42px] font-bold mb-[18px]'}
      >
        you might have:
      </h1>
      <div className={'flex flex-wrap gap-[15px] sm:gap-[18px]'}>
        {offeredOptions.map((offeredOption) => (
          <Chip
            key={offeredOption}
            title={offeredOption.name}
            onClick={() => removeOption(offeredOption)}
          />
        ))}
      </div>
    </div>
  )
}

SearchCard.propTypes = {
  setChosenProducts: propTypes.func.isRequired,
}

export default SearchCard
