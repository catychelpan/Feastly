import IngredientsCard from '../components/IngredientsCard.jsx'
import SearchCard from '../components/SearchCard.jsx'
import SearchRecipesTitle from '../components/SearchRecipesTitle.jsx'
import React, { useRef } from 'react'
import ResultCard from '../components/SearchReceiptResultCard.jsx'
import NoReceiptsFound from '../components/NoReceiptsFound.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import axios from 'axios'
import { ClockLoader } from 'react-spinners'

//GET https://api.spoonacular.com/recipes/findByIngredients - api to get recipes by ingredients

const apiKey = import.meta.env.VITE_API_KEY

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const SearchRecipes = () => {
  const [products, setProducts] = React.useState([])
  const [recipes, setRecipes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const receipesResultNode = useRef(null)

  const handleRecipesSearch = async () => {
    const ingredients = products.map((item) => item.name).join(',')
    try {
      setIsLoading(true)
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`,
      )
      receipesResultNode.current?.scrollIntoView({ behavior: 'smooth' })
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={'sm:py-[45px] sm:px-[85px] py-[23px] px-[25px]'}>
      <SearchRecipesTitle />
      <div className={'flex lg:flex-row flex-col gap-[25px] sm:justify-between'}>
        <SearchCard setChosenProducts={setProducts} />
        <div className={'flex flex-col gap-[31px] justify-between'}>
          <IngredientsCard ingredients={products} setChosenProducts={setProducts} />
          <PrimaryButton onClick={handleRecipesSearch} />
        </div>
      </div>

      <div className={'sm:max-w-[55%] w-[90%] mt-[60px] sm:mt-[120px] mb-[25px] sm:mb-[55px]'}>
        <h1 className={'text-[42px] sm:text-4xl leading-[40px] sm:leading-[73px] text-dark'}>
          {recipes.length} recipes based on your ingredients
        </h1>
      </div>

      <div ref={receipesResultNode}></div>
        <ClockLoader
          loading={isLoading}
          cssOverride={override}
          size={250}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      {(!isLoading && recipes.length > 0) ? (
        <div className={'flex flex-col gap-[25px]'}>
          {recipes.map((item) => (
            <ResultCard key={item.id} {...item} />
          ))}
        </div>
      ) : null }
      { (!isLoading && recipes.length === 0) ? (
          <NoReceiptsFound />
      ): null}
    </section>
  )
}

export default SearchRecipes
