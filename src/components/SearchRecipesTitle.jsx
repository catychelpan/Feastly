const SearchRecipesTitle = () => {
  const description =
    'Leftover bread, an onion, and some milk in your fridge? Our recipe finder helps you turn them into delicious meals with minimal extra ingredients. No food waste, just tasty dishes!'
  return (
    <div
      className={
        'flex sm:flex-row flex-col gap-[15px] justify-start items-end mb-[25px] sm:mb-[55px]'
      }
    >
      <h1
        className={
          'sm:text-5xl text-[42px] font-bold leading-[40px] sm:leading-[73px] basis-[50%] flex items-start'
        }
      >
        What can I make with...
      </h1>
      <p
        className={
          'basis-[50%] text-[16px] sm:text-xl leading-[18px] sm:leading-[32px] font-roboto max-w-[620px]'
        }
      >
        {description}
      </p>
    </div>
  )
}

export default SearchRecipesTitle
