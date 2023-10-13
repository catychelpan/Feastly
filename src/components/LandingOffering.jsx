import LandingIcon from '../assets/landing.svg?react'
import ButtonIcon from '../assets/btn_icon.svg?react'

const LandingOffering = () => {
  return (
    <section className={'max-w-[731px] mt-[50px] sm:mt-0'}>
      <div className={'relative'}>
        <LandingIcon className={'sm:max-h-[124px] sm:max-w-[420px] max-h-[52px] max-w-[176px]'} />
        <h1
          className={
            'absolute sm:top-0 mt-[-1rem] font-bold sm:left-8 top-2 left-2 text-dark font-grotesk sm:text-6xl text-[42px]'
          }
        >
          feastly:
        </h1>
      </div>
      <div className={'absolute'}>
        <h1
          className={
            'font-bold text-dark font-grotesk sm:leading-[96px] leading-[40px] relative sm:text-6xl text-[42px]'
          }
        >
          savor simplicity
        </h1>
      </div>
      <div className={'sm:mt-[118px] mt-[65px] max-w-[589px]'}>
        <p className={'font-roboto font-normal text-[16px] sm:text-[24px]'}>
          Welcome to Feastly! Think of it like solving a puzzle - you provide the pieces (dietary
          needs, your preferences and tastes), and we'll build the picture-perfect meal plan for
          you.
        </p>
      </div>
      <div className={'hidden sm:block my-[30px]'}>
        <button
          className={
            'bg-[#CAE78E] p-[16px] text-dark flex justify-between' +
            ' font-roboto max-w-[400px] hover:shadow-none transition-all active:bg-primary_light w-full border-[1px] border-dark rounded-[6px] shadow-3xl'
          }
        >
          Explore
          <ButtonIcon />
        </button>
      </div>
    </section>
  )
}

export default LandingOffering
