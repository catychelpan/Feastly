import propTypes from 'prop-types'

const DietButton = ({ Icon, text, setDiet}) => {
  return (
    <div className={'flex flex-col gap-[8.5px] sm:gap-[16px] items-center'}>
      <Icon
        
        class={'max-h-[50px] max-w-[50px] sm:max-h-[80px] sm:max-w-[80px] active:fill-primary pointer'}
      />
      <h5
        className={
          'sm:text-16px sm:font-grotesk font-roboto leading-[16px] sm:text-lg sm:leading-[24px]'
        }
      >
        {text}
      </h5>
    </div>
  )
}

DietButton.propTypes = {
  Icon: propTypes.element,
  text: propTypes.string.isRequired,
  setDiet: propTypes.func
}

export default DietButton
