import LandingOffering from '../components/LandingOffering.jsx'
import LandingFeature from '../components/LandingFeature.jsx'
import ChooseOption from '../components/ChooseOption.jsx'

const Landing = () => {
  return (
    <>
      <div
        className={
          'sm:mb-[25px] sm:mx-[84px] mx-[25px] sm:mt-[45px] font-grotesk font-bold flex sm:justify-around lg:flex-row flex-col'
        }
      >
        <LandingOffering />
        <LandingFeature />
      </div>
      <ChooseOption />
    </>
  )
}


export default Landing
