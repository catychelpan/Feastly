import Glass from '../assets/glass.svg?react'
import propTypes from 'prop-types'

const PrimaryInput = ({
  name,
  onChange,
  placeholder,
  type = 'text',
  className,
  withIcon = true,
  value,
}) => {
  return (
    <div className={'relative'}>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${className} text-sm placeholder:text-sm sm:text-lg leading-[29px] font-bold font-roboto border-[1px] border-dark focus:border-[1px] focus:outline-0
         w-full rounded-[10px] px-[21px] py-[15px] placeholder:font-roboto lg:placeholder:text-lg placeholder:leading-[29px] placeholder:font-bold`}
      />
      {withIcon ? (
        <Glass
          className={
            'absolute right-1.5 top-4 max-w-[31px] max-h-[31px] sm:max-w-[35px] sm:max-h-[35px]'
          }
        />
      ) : null}
    </div>
  )
}

PrimaryInput.propTypes = {
  name: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  className: propTypes.string,
  type: propTypes.string,
  withIcon: propTypes.bool,
  value: propTypes.number,
}

export default PrimaryInput
