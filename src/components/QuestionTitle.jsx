import QuizImage from '../assets/quiz_image.png'
import React from 'react'

const QuestionTitle = () => {
  return (
    <div className={'flex flex-col gap-[15px] sm:gap-[40px] items-start max-w-[570px]'}>
      <h1 className={'text-[42px] sm:text-4xl leading-[40px] sm:leading-[73px]'}>
        let’s take a quiz!
      </h1>
      <p
        className={
          'font-roboto font-normal text-[16px] leading-[19px] sm:text-xl sm:leading-[32px]'
        }
      >
        Welcome to our Quiz Section! Discover personalized recipes and a week-long meal plan based
        on your preferences and dietary needs. Start the quiz now! 🌟
      </p>
      <img
        className={'max-h-[470px] max-w-[311px] sm:max-w-[570px] object-contain '}
        src={QuizImage}
        alt={'question'}
      />
    </div>
  )
}
export default QuestionTitle
