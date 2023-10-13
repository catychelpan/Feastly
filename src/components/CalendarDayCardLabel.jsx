const CalendarDayCardLabel = ({ type, className }) => {
  return (
    <div
      className={`${className} bg-white text-dark text-center border-[1px] border-dark rounded-[24px] max-h-[44px] py-[10px] px-[21px]`}
    >
      <h1 className={'text-sm sm:text-lg leading-[17px] sm:leading-[24px]'}>{type}</h1>
    </div>
  )
}
export default CalendarDayCardLabel
