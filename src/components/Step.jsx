import propTypes from 'prop-types'

const Step = ({ step, selected = false, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        className ? className : ''
      } flex sm:max-h-[76px] max-h-[67px] max-w-[87px] sm:max-w-full transition-colors items-center justify-center border-[1px] border-dark text-dark text-[42px] sm:text-[56px] rounded-[41px] px-[69px] pt-[11px] pb-[24px] ${
        selected ? 'bg-primary shadow-3xl' : 'bg-white'
      }`}
    >
      {step}
    </div>
  )
}

Step.propTypes = {
  step: propTypes.number.isRequired,
  selected: propTypes.bool.isRequired,
  className: propTypes.string,
  onClick: propTypes.func,
}

export default Step
