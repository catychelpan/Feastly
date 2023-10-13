import GoogleIcon from '../assets/google_icon.svg?react'
import propTypes from 'prop-types'

const buttonStatesStyle =
  'hover:border-dark transition-colors active:mt-[-2px] active:border-[3px] sm:active:px-[59px] sm:active:py-[22px]'

const baseStyles = `sm:max-w-full sm:px-[61px] sm:py-[25px] sm:rounded-[6px] flex gap-[15px] bg-white font-roboto sm:text-lg' +
    ' sm:leading-[29px] sm:font-bold border-[1px] ${buttonStatesStyle}`

const mobileStyles =
  'px-[23.5px] py-[13px] text-sm leading-[21px] whitespace-nowrap items-center font-semibold rounded-[4px] max-w-[254px]'

const disabledStateStyles = 'bg-white_inactive border-dark'

const GoogleButton = ({ onClick, className, children, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`${
        disabled ? disabledStateStyles : ''
      } ${className} ${mobileStyles} ${baseStyles}`}
      onClick={onClick}
    >
      <GoogleIcon />
      {children}
    </button>
  )
}

GoogleButton.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.string,
  disabled: propTypes.bool,
}

export default GoogleButton
