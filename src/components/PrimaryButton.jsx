import ButtonIcon from '../assets/btn_icon.svg?react'

const PrimaryButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'w-full bg-[#CAE78E] p-[16px] text-dark sm:text-lg text-[16px] flex justify-between' +
        ' font-roboto font-bold hover:shadow-none transition-all active:bg-primary_light w-full border-[1px] border-dark rounded-[6px] shadow-3xl'
      }
    >
      Explore
      <ButtonIcon />
    </button>
  )
}

export default PrimaryButton
