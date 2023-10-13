import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeStep from '../components/RecipeStep.jsx'
import NutritionCard from '../components/NutritionCard.jsx'

const apiKey = import.meta.env.VITE_API_KEY

const Recipe = () => {
  const { id, name } = useParams()

  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [nutrients, setNutrients] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`,
      )
      const stepsArray = data.map((item) => item.steps)
      setRecipe(stepsArray.flat())
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchIngredients = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`,
      )
      console.log(data)
      setIngredients(data.extendedIngredients.map((item) => item.original))
      setNutrients(data.nutrition.nutrients.slice(0, 10))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(id)
  }, [id])

  useEffect(() => {
    fetchIngredients(id)
  }, [id])

  return (
    <section className={'md:px-[85px] md:pb-[100px] pt-[25px] px-[25px]'}>
      <h1
        className={
          'text-[42px] leading-[40px] md:text-4xl md:leading-[73px] mb-[50px] md:mb-[55px]'
        }
      >
        {name}
      </h1>
      <div
        className={
          'flex flex-col md:flex-row gap-[60px] md:justify-between md:gap-[55px] mb-[55px]'
        }
      >
        <div className={'flex flex-col gap-[25px] max-w-[512px] sm:max-w-full w-full'}>
          <div className={'bg-secondary rounded-[15px]'}>
            <h1
              className={
                'text-xl md:text-2xl leading-[26px] md:leading-[42px] px-[35px] py-[30px] text-left'
              }
            >
              ingredients
            </h1>
          </div>
          <div
            className={
              'bg-secondary rounded-[15px] pl-[60px] pr-[30px] py-[55px] max-h-[544px] h-full overflow-auto'
            }
          >
            <ul
              className={
                'list-disc flex flex-col gap-[30px] font-roboto font-normal text-base leading-[25px]'
              }
            >
              {ingredients.map((item) => (
                <li key={item} className={'pl-[22px]'}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={'flex flex-col gap-[25px] max-w-[703px]'}>
          <div className={'bg-primary rounded-[15px]'}>
            <h1
              className={
                'text-xl md:text-2xl leading-[26px] md:leading-[42px] px-[35px] py-[30px] text-left'
              }
            >
              instructions
            </h1>
          </div>
          <div
            className={
              'bg-primary rounded-[15px] px-[15px] md:px-[30px] py-[55px] max-h-[544px] h-full overflow-auto'
            }
          >
            <div className={'flex flex-col gap-[35px]'}>
              {recipe.map((item) => (
                <RecipeStep step={item.number} key={item.step} text={item.step} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={'bg-secondary rounded-[15px] py-[30px] px-[35px] mb-[25px]'}>
        <h1 className={'text-left text-xl md:text-2xl leading-[26px] md:leading-[42px]'}>
          nutrition facts
        </h1>
      </div>
      <div className={'flex justify-center gap-[20px] md:gap-[35px] flex-wrap'}>
        {nutrients.map((item) => (
          <NutritionCard
            key={item.name}
            name={item.name}
            quantity={`${item.amount} ${item.unit}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Recipe
