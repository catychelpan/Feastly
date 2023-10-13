const RecipeStep = ({ step, text }) => {
  return (
    <div className={'flex gap-[18px] font-roboto font-normal text-dark text-base'}>
      <div
        className={`max-w-[108px] font-grotesk bg-white text-dark text-center border-[1px] border-dark rounded-[24px] max-h-[44px] py-[10px] px-[21px]`}
      >
        <h1
          className={
            'text-lg leading-[20px] whitespace-nowrap text-center flex justify-center items-center'
          }
        >
          Step {step}
        </h1>
      </div>
      <p className={'leading-[25px]'}>{text}</p>
    </div>
  )
}
export default RecipeStep
