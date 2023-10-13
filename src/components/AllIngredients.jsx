const AllIngredients = ({ missedIngredients = [], usedIngredients = [] }) => {
  return (
    <div className={'flex flex-col gap-[10px] mb-[18px]'}>
      <h1 className={'text-lg leading-[24px]'}>all ingredients:</h1>
      <div className={'flex w-full flex-wrap'}>
        {usedIngredients.map((item, idx) => (
          <span
            className={
              'text-[16px] leading-[18px] font-normal font-roboto sm:text-base mr-[5px] sm:leading-[25px]'
            }
            key={idx}
          >{`${item.name}, `}</span>
        ))}
        {missedIngredients.map((item, idx) => (
          <span
            className={
              'text-[16px] leading-[18px] font-bold font-roboto sm:text-base mr-[5px] sm:leading-[25px]'
            }
            key={idx}
          >{`${item.name}, `}</span>
        ))}
      </div>
    </div>
  )
}

export default AllIngredients
