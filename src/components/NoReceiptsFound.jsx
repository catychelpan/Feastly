import ArrowIcon from '../assets/btn_icon.svg?react'

const NoReceiptsFound = () => {
  return (
    <div
      className={
        'bg-primary rounded-[15px] py-[55px] sm:px-[106px] px-[30.5px] flex flex-col gap-[40px] sm:gap-[18px]'
      }
    >
      <h1
        className={
          'text-xl sm:text-2xl leading-[26px] sm:leading-[42px] text-center sm:whitespace-nowrap'
        }
      >
        Sorry, we couldn’t find recipes with such ingredients.
      </h1>
      <button
        className={
          'bg-white text-sm sm:text-lg font-semibold font-roboto items-center outline-0 px-[20px] py-[15px] flex justify-between rounded-[6px]'
        }
      >
        Try Again
        <ArrowIcon className={'max-h-[10px] max-w-[10px] sm:max-w-[20px] sm:max-h-[20px]'} />
      </button>
    </div>
  )
}

export default NoReceiptsFound
