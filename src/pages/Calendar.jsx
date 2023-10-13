import LeftArrowButton from '../components/LeftArrowButton.jsx'
import RightArrowButton from '../components/RightArrowButton.jsx'
import CalendarDayCard from '../components/CalendarDayCard.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'
import useWindowWidth from '../hooks/useWindowWidth.js'
import CalendarTitle from '../components/CalendarTitle.jsx'

const MOBILE_WIDTH = 800

const Calendar = () => {
  const [step, setStep] = useState(0)
  const [plan, setPlan] = useState([])
  const { width } = useWindowWidth()
  const isDesktop = width > MOBILE_WIDTH
  const [isLeftArrowBtn, setIsLeftArrowBtn] = useState(false)
  const { dietPlan } = useContext(AuthContext)

  const onStepForwardMobile = () => {
    setIsLeftArrowBtn(false)
    step < 6 ? setStep((prevState) => prevState + 1) : setStep(0)
  }

  const onStepBackwardMobile = () => {
    setIsLeftArrowBtn(true)
    step > 0 ? setStep((prevState) => prevState - 1) : setStep(6)
  }

  const onStepForward = () => {
    setIsLeftArrowBtn(false)
    step < 2 ? setStep((prevState) => prevState + 1) : setStep(0)
  }

  const onStepBackward = () => {
    setIsLeftArrowBtn(true)
    step > 0 ? setStep((prevState) => prevState - 1) : setStep(2)
  }

  useEffect(() => {
    const plans = []

    for (const [key, day] of Object.entries(dietPlan)) {
      const breakFast = day.meals[0]
      const lunch = day.meals[1]
      const dinner = day.meals[2]

      plans.push(
        <CalendarDayCard
          key={key.slice(0, 3)}
          day={key.slice(0, 3)}
          breakfast={breakFast}
          lunch={lunch}
          dinner={dinner}
        />,
      )
    }
    setPlan(plans)
  }, [])

  const renderCardsOnDesktop = (step) => {
    if (step === 0) return plan.map((item) => item).slice(0, 3)
    else if (step === 1) return plan.map((item) => item).slice(3, 6)
    return plan.at(-1)
  }

  const renderMobileCards = (step) => {
    return plan[step]
  }

  return (
    <section className={'md:py-[45px] md:px-[85px] px-[25px] py-[23px]'}>
      <div className={'w-[80%] md:w-[55%]'}>
        <CalendarTitle />
      </div>
      <div
        className={
          'flex justify-between md:justify-end gap-[25px] mt-[50px] md:mt-0 mb-[40px] md:max-w-full max-w-[370px]'
        }
      >
        <LeftArrowButton onClick={isDesktop ? onStepBackward : onStepBackwardMobile} />
        <RightArrowButton onClick={isDesktop ? onStepForward : onStepForwardMobile} />
      </div>
      <AnimatePresence>
        <motion.div
          key={step}
          className={'flex gap-[30px]'}
          initial={{ x: isLeftArrowBtn ? '-45%' : '45%' }}
          animate={{ x: '0' }}
        >
          {isDesktop ? renderCardsOnDesktop(step) : renderMobileCards(step)}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Calendar
