import RightArrow from '../assets/right_arrow.svg?react'

const RightArrowButton = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className={
        'flex justify-center border-[1px] w-full max-w-[162px] md:max-w-[127px] border-dark rounded-[6px] items-center bg-primary shadow-3xl px-[45px] py-[12px]'
      }
    >
      <RightArrow />
    </button>
  )
}

export default RightArrowButton
