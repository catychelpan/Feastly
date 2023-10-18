import propTypes from 'prop-types'

const DietButton = ({ Icon, text, setDiet }) => {
  return (
    <div onClick={() => setDiet(text) } className={'flex m-[1rem] sm:mb-[4rem] max-h-[50px] max-w-[77px] w-full sm:w-[auto] h-full sm:max-h-[auto] flex-col gap-[8.5px] sm:gap-[16px] items-center cursor-pointer'}>
      <div>
      <Icon
        
        class={'max-h-[50px] max-w-[50px] sm:max-h-[80px] w-full h-full sm:max-w-[80px] active:fill-primary'}
      />
      </div>

      <h5
        className={
          'sm:text-16px sm:font-grotesk font-roboto text-center leading-[16px] sm:text-lg sm:leading-[24px]'
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
