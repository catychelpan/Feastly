import CalendarDayCardLabel from './CalendarDayCardLabel.jsx'
import CalendarRecipe from './CalendarRecipe.jsx'

const CalendarDayCard = ({ day, breakfast, lunch, dinner }) => {
  return (
    <section className={'flex flex-col gap-[21px] max-w-[406px] max-h-[668px] w-full'}>
      <div className={'py-[18px] bg-primary rounded-[15px] text-xl md:text-2xl text-center'}>
        {day}
      </div>
      <div
        className={'bg-secondary rounded-[15px] py-[40px] px-[30px] max-h-[569px] overflow-auto'}
      >
        <div className={'flex flex-col gap-[15px] mb-[30px]'}>
          <div className={'flex justify-between items-baseline'}>
            <CalendarDayCardLabel type={'breakfast'} />
          </div>
          <CalendarRecipe
            name={breakfast.title}
            time={breakfast.readyInMinutes}
            id={breakfast.id}
          />
        </div>
        <div className={'flex flex-col gap-[15px] mb-[30px]'}>
          <div className={'flex justify-between'}>
            <CalendarDayCardLabel type={'lunch'} />
          </div>
          <CalendarRecipe id={lunch.id} name={lunch.title} time={lunch.readyInMinutes} />
        </div>
        <div className={'flex flex-col gap-[15px]'}>
          <div className={'flex justify-between'}>
            <CalendarDayCardLabel type={'dinner'} />
          </div>
          <CalendarRecipe id={dinner.id} name={dinner.title} time={dinner.readyInMinutes} />
        </div>
      </div>
    </section>
  )
}

export default CalendarDayCard
