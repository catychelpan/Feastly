import Step from './Step.jsx'
import { useEffect, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth.js'

const MOBILE_WIDTH = 800
const QuestionStepper = ({ step, setStep }) => {
  const { width } = useWindowWidth()

  const isDesktop = width > MOBILE_WIDTH
  const handleNextStep = (step) => setStep(step)
  return (
    <div
      className={'flex gap-[5px] mb-[50px] max-w-[309px] sm:max-w-[620px] w-full justify-center'}
    >
      <Step step={1} selected={step === 1} onClick={() => handleNextStep(1)} />
      <div className={'flex gap-[4px] items-center'}>
        <div className={'border-none h-[4px] bg-dark w-[6px] rounded-[4px]'}></div>
        <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
        <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
        {isDesktop ? (
          <>
            <div className={'border-none h-[4px] bg-dark w-[6px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[6px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[6px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[6px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[6px] rounded-[4px]'}></div>
            <div className={'border-none h-[4px] bg-dark w-[10px] rounded-[4px]'}></div>
          </>
        ) : null}
      </div>
      <Step
        step={2}
        selected={step === 2}
        className={'ml-[-4px] z-10 relative'}
        onClick={() => handleNextStep(2)}
      />
    </div>
  )
}
export default QuestionStepper
