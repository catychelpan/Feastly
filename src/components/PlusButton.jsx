import PlusBtnIcon from '../assets/plus_btn_icon.svg?react'

const PlusButton = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className={
        'max-w-[58px] max-h-[58px] flex justify-center items-center rounded-full p-[16px] bg-white text-dark border-[1px] border-dark active:bg-dark active:fill-primary transition-colors'
      }
    >
      <PlusBtnIcon className={'active:stroke-primary'} />
    </button>
  )
}

export default PlusButton
