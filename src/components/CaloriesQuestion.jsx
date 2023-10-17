import DietButton from './DietButton.jsx'
import VegetarianIcon from '../assets/vegetarian_icon.svg?react'
import VeganIcon from '../assets/vegan_icon.svg?react'
import DairyFreeIcon from '../assets/dairy_free.svg?react'
import GlutenFreeIcon from '../assets/gluten_free.svg?react'
import { motion } from 'framer-motion'
import PrimaryInput from './PrimaryInput.jsx'

const CaloriesQuestion = ({ motionKey, setCalories, calories,diet,setDiet }) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={
        'sm:py-[55px] sm:px-[40px] px-[16px] py-[25px] bg-secondary rounded-[15px] mb-[25px]'
      }
    >
      <h1
        className={
          'text-xl sm:text-2xl w-[80%] sm:w-full leading-[26px] sm:leading-[42px] mb-[18px]'
        }
      >
        how many calories do you need per day?
      </h1>
      <PrimaryInput
        type={'number'}
        name={'calories'}
        onChange={(event) => setCalories(event.target.value)}
        value={calories}
        className={'mb-[50px]'}
        placeholder={'calories/day'}
        withIcon={false}
      />
      <h1
        className={
          'text-xl sm:text-2xl text-center sm:text-left leading-[26px] sm:leading-[42px] mb-[21px]'
        }
      >
        any special diets?
      </h1>
      <div
        className={
          'flex flex-wrap justify-between sm:justify-center gap-[18px] sm:gap-[20px] mb-[25px] px-[70px] sm:px-0'
        }
      >
        <DietButton Icon={VegetarianIcon} text={'vegetarian'} />
        <DietButton Icon={VeganIcon} text={'vegan'} />
        <DietButton Icon={DairyFreeIcon} text={'dairy-free'} />
        <DietButton Icon={GlutenFreeIcon} text={'gluten-free'} />
      </div>
    </motion.div>
  )
}
export default CaloriesQuestion
