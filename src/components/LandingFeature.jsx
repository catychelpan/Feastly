import CreativeKnowledge from '../assets/Creative_Knowledge.webp'
import LandingFeatureCard from './LandingFeatureCard.jsx'
import FeatureIcon from '../assets/feature_icon.svg?react'
import PrimaryButton from './PrimaryButton.jsx'

const LandingFeature = () => {
  return (
    <div>
      <div className={'flex flex-col items-end'}>
        <div
          className={
            'hidden sm:flex border-[1px] border-dark w-[403px] h-[233px] justify-center items-center rounded-[15px] mb-[25px]'
          }
        >
          <img src={CreativeKnowledge} alt={'feature'} height={'214px'} width={'254px'} />
        </div>
        <div
          className={
            'hidden sm:block w-[403px] px-[57px] py-[34px] h-[179px] bg-secondary font-grotesk text-[56px] text-center leading-[54px] rounded-[15px]'
          }
        >
          what you can do
        </div>
      </div>
      <div className={'w-full flex justify-center'}>
        <div
          className={
            'sm:w-[708px] sm:max-w-full w-full max-w-[362px] sm:rounded-[15px] rounded-[10px] mt-[25px] bg-secondary' +
            ' flex justify-center sm:flex-row flex-col gap-[40px] sm:mt-[-1.5rem] z-10 relative p-[25px]'
          }
        >
          <LandingFeatureCard
            Icon={FeatureIcon}
            description={'find recipes based on your preferences'}
          />
          <LandingFeatureCard
            Icon={FeatureIcon}
            description={'find recipes to use ingredients you already have'}
          />
          <LandingFeatureCard
            Icon={FeatureIcon}
            description={'generate an entire meal plan for a week'}
          />
        </div>
      </div>
      <div className={'sm:hidden block max-w-[362px] sm:my-[30px] my-[30px]'}>
        <PrimaryButton />
      </div>
    </div>
  )
}

export default LandingFeature
