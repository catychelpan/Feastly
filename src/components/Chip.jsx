import propTypes from 'prop-types'
import PlusIcon from '../assets/plus_icon.svg?react'

const Chip = ({ title, onClick }) => {
  const handleOnClick = () => {
    onClick()
  }
  return (
    <div
      onClick={() => handleOnClick(title)}
      className={
        'border-[1px] rounded-[33px] bg-white p-[15px] flex justify-between items-center gap-[15px] cursor-pointer border-dark'
      }
    >
      <PlusIcon />
      <p className={'text-sm sm:text-lg leading-[17px] sm:leading-[24px] font-bold'}>{title}</p>
    </div>
  )
}

Chip.propTypes = {
  title: propTypes.string.isRequired,
  onClick: propTypes.func,
}

export default Chip
