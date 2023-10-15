import React, { useContext, useState } from 'react'
import CaloriesQuestion from '../components/CaloriesQuestion.jsx'
import QuestionStepper from '../components/QuestionStepper.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import QuestionTitle from '../components/QuestionTitle.jsx'
import IngredientsQuestion from '../components/IngredientsQuestion.jsx'
import { AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext.jsx'
import { saveDietPlan } from '../firebase/utils.js'
import useSortByDay from '../hooks/useSortByDay.js'
//import { ClockLoader } from 'react-spinners/ClockLoader.js';

const apiKey = import.meta.env.VITE_API_KEY

const Questions = () => {
  const [step, setStep] = React.useState(1)
  const [calories, setCalories] = React.useState(0)
  
  const [dislikedIngredients, setDislikedIngredients] = React.useState([])
  //TODO add diet option to request
  const [diet, setDiet] = React.useState('')
  const { sortByDay } = useSortByDay()
  const {
    setDietPlan,
    currentUser: { uid },
  } = useContext(AuthContext)

  const[loading,setIsLoading] = React.useState(false)

  const navigate = useNavigate()

  const handleQuestion = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&targetCalories=${calories}&diet${diet}&exclude=${dislikedIngredients.join(
          ',',
        )}&apiKey=${apiKey}`,
      )
      const sortable = sortByDay(data.week)
      setDietPlan(sortable)
      await saveDietPlan(sortable, uid)

      //TODO spinner
      navigate('/calendar')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  //if(loading) return <ClockLoader loading = {loading} size = {60} color="green"/>

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CaloriesQuestion motionKey={step} setCalories={setCalories} calories={calories} setDiet={setDiet} diet={diet} />
      case 2:
        return (
          <IngredientsQuestion
            ingredients={dislikedIngredients}
            setIngredients={setDislikedIngredients}
            motionKey={step}
            name={'dislike'}
            title={'what ingredients you don’t like?'}
          />
        )
      default:
        return 0
    }
  }

  return (
    <div
      className={
        'flex lg:flex-row flex-col gap-[60px] sm:gap-[80px] justify-between pb-[133px] sm:pt-[55px] sm:px-[85px] px-[25px] py-[23px]'
      }
    >
      <QuestionTitle />
      <section>
        <QuestionStepper step={step} setStep={setStep} />
        <AnimatePresence>{renderStep()}</AnimatePresence>
        <PrimaryButton onClick={handleQuestion} />
      </section>
    </div>
  )
}

export default Questions
