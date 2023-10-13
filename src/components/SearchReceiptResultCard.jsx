import MissedIngredientsCount from './MissedIngredientCount.jsx'
import AllIngredients from './AllIngredients.jsx'
import ResultCardTitle from './ResultCardTitle.jsx'
import propTypes from 'prop-types'

const ResultCard = ({
  id,
  image,
  title,
  missedIngredients,
  usedIngredients,
  missedIngredientCount,
}) => {
  return (
    <section className={'bg-primary sm:px-[50px] py-[35px] px-[24px] sm:py-[65px] rounded-[15px]'}>
      <div className={'flex lg:flex-row flex-col gap-[40px]'}>
        <img
          src={image}
          className={'max-w-[400px] max-h-[272px] object-contain rounded-[15px]'}
          alt={'dish'}
        />
        <div className={'flex flex-col w-full'}>
          <ResultCardTitle title={title} id={id} />
          <MissedIngredientsCount count={missedIngredientCount} />
          <AllIngredients missedIngredients={missedIngredients} usedIngredients={usedIngredients} />
        </div>
      </div>
    </section>
  )
}

ResultCard.propTypes = {
  id: propTypes.string,
  image: propTypes.string,
  title: propTypes.string,
  missedIngredients: propTypes.array,
  usedIngredients: propTypes.array,
  missedIngredientCount: propTypes.number,
}

export default ResultCard
