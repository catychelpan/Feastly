import propTypes from 'prop-types'

const LandingFeatureCard = ({ Icon, description }) => {
  return (
    <div
      className={
        'flex sm:flex-col sm:w-[177px] justify-center flex-row sm:gap-[20px] gap-[18px] w-full items-center sm:py-[45px]'
      }
    >
      <div
        className={
          'sm:flex sm:justify-center justify-between items-center sm:max-h-[81px] sm:max-w-[81px] max-h-[41px] max-w-[41px]'
        }
      >
        <Icon width={'100%'} />
      </div>
      <p className={'sm:text-center text-start font-roboto font-normal sm:text-base text-[16px]'}>
        {description}
      </p>
    </div>
  )
}

LandingFeatureCard.propTypes = {
  Icon: propTypes.elementType,
  description: propTypes.string,
}

export default LandingFeatureCard
