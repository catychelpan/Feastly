const MissedIngredientsCount = ({ count }) => {
  return (
    <div className={'flex gap-[7px] items-center mb-[19px]'}>
      <h1 className={'text-sm sm:text-lg leading-[24px]'}>missed ingredients:</h1>
      <div
        className={
          'text-sm sm:text-lg rounded-[15px] px-[20px] leading-[15px] pt-[4px] pb-[10px] border-[1px] border-dark bg-white text-center'
        }
      >
        {count}
      </div>
    </div>
  )
}

export default MissedIngredientsCount
