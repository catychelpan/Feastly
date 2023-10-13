import { Link } from 'react-router-dom'
const ResultCardTitle = ({ title, id }) => {
  return (
    <div className={'flex gap-[30px] justify-between mt-[-20px] mb-[30px]'}>
      <h1 className={'text-xl sm:text-2xl leading-[26px] sm:leading-[42px] break-words'}>
        {title}
      </h1>
      <Link
        to={`/recipe/${id}/${title}`}
        className={
          'whitespace-nowrap self-start py-[10px] px-[10px] sm:px-[20px] text-center text-sm sm:text-lg leading-[24px] bg-white rounded-[9px] border-[1px] border-dark'
        }
      >
        View Details
      </Link>
    </div>
  )
}

export default ResultCardTitle
