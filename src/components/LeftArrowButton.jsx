import LeftArrow from '../assets/left_arrow.svg?react'

const LeftArrowButton = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className={
        'flex justify-center border-[1px] max-w-[162px] md:max-w-[127px] w-full border-dark rounded-[6px] items-center bg-primary shadow-3xl px-[45px] py-[12px] cursor-pointer'
      }
    >
      <LeftArrow />
    </button>
  )
}

export default LeftArrowButton
