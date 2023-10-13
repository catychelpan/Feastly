import propTypes from 'prop-types'
import { motion } from 'framer-motion'

const ProductDropdownResult = ({ text, lastResult, onClick }) => {
  return (
    <motion.span
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ color: '#262626' }}
      className={`bg-white w-full border-dark border-b-[1px] font-bold font-roboto text-lg leading-[29px] text-white_inactive px-[21px] py-[15px] text-left ${
        lastResult ? 'rounded-b-[12px] border-white' : ''
      }`}
    >
      {text}
    </motion.span>
  )
}

ProductDropdownResult.propTypes = {
  text: propTypes.string.isRequired,
  lastResult: propTypes.bool,
  onClick: propTypes.func,
}

export default ProductDropdownResult
