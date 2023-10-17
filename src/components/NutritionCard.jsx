const NutritionCard = ({ name, quantity }) => {
  return (
    <div
      className={
        'flex flex-col gap-[15px] bg-secondary rounded-[15px] py-[40px] px-[50px] max-w-[145px] md:max-w-[226px] max-h-[168px] w-full items-center'
      }
    >
      <h1
        className={
          'font-roboto font-bold text-base leading-[29px] whitespace-nowrap max-w-[93px] overflow-hidden overflow-ellipsis'
        }
      >
        {name}
      </h1>
      <div
        className={
          'bg-white text-dark text-center border-[1px] border-dark rounded-[24px] max-h-[44px] py-[5px] px-[21px]'
        }
      >
        <h1
          className={
            'text-lg leading-[25px] pb-[25px] overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[85px] md:max-w-full'
          }
        >
          {quantity}
        </h1>
      </div>
    </div>
  )
}

export default NutritionCard
