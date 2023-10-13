import { Link } from 'react-router-dom'
const CalendarRecipe = ({ name, time, id }) => {
  return (
    <Link
      to={`/recipe/${id}/${name}`}
      className={'px-[20px] py-[24px] flex justify-between gap-[25px] bg-white rounded-[9px]'}
    >
      <p
        className={'text-sm font-roboto md:text-base leading-[21px] md:leading-[25px] font-normal'}
      >
        {name}
      </p>
      <p
        className={'text-sm font-roboto md:text-base leading-[21px] md:leading-[25px] font-normal'}
      >
        {time}
      </p>
    </Link>
  )
}

export default CalendarRecipe
