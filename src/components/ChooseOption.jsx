import NoRegistrationOption from './NoRegistrationOption.jsx'
import RegistrationOption from './RegistrationOption.jsx'
const ChooseOption = () => {
  return (
    <div
      className={
        'bg-secondary_light sm:rounded-[15px] rounded-[30px] py-[55px] w-full sm:mx-[84px] sm:my-[120px] my-[60px] mx-0 max-w-[1271px]'
      }
    >
      <div
        className={
          'px-[26px] sm:px-0 flex flex-col sm:flex-row sm:gap-[18px] gap-0 leading-0 sm:items-baseline items-start justify-center pb-[55px]'
        }
      >
        <h1 className={'sm:text-4xl text-[42px] font-grotesk'}>choose what</h1>
        <h1 className={'font-roboto italic sm:text-[56px] sm:mt-0 mt-[-20px] text-[36px]'}>
          (you want)
        </h1>
      </div>

      <div className={'flex sm:justify-center sm:flex-row flex-col items-center gap-[55px]'}>
        <NoRegistrationOption />
        <RegistrationOption />
      </div>
    </div>
  )
}

export default ChooseOption
