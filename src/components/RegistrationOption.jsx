import RegistrationStep2 from '../assets/registration_step2.svg?react'
import GoogleButton from './GoogleButton.jsx'
import { useNavigate } from 'react-router-dom'
import { getDietPlan, signInWithGoogle } from '../firebase/utils.js'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const [loading,setIsLoading] = useState(false)

const sortDays = function (a, b) {
  a = days.indexOf(a[0])
  b = days.indexOf(b[0])
  return a - b
}

const RegistrationOption = () => {
  const navigate = useNavigate()

  const { isLoggedIn, setDietPlan, currentUser } = useContext(AuthContext)

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      if (!isLoggedIn) await signInWithGoogle()
      const dietPlan = await getDietPlan(currentUser?.uid)
      if (dietPlan) {
        const sortable = Object.fromEntries(Object.entries(dietPlan).sort(sortDays))
        setDietPlan(sortable)
        navigate('calendar')
        return
      }
      navigate('questions')
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  //if(loading) return <ClockLoader loading = {loading} size = {60} color="blue"/>

  return (
    <div
      className={
        'bg-primary py-[50px] rounded-[15px] sm:max-w-[491px] sm:max-h-[609px] h-full max-w-[310px]'
      }
    >
      <div
        className={
          'max-h-[44px] max-w-[257px] sm:max-w-[365px] py-[10px] px-[15px] whitespace-nowrap border-dark leading-[24px]' +
          ' rounded-[24px] mb-[40px] bg-white text-dark' +
          ' text-center sm:text-lg text-sm border-[1px] sm:py-[10px] sm:px-[25px] sm:ml-[67.5px] sm:mr-[58.5px] mx-[26.5px]'
        }
      >
        only with personal account
      </div>
      <div className={'flex flex-col gap-[30px]'}>
        <div className={'flex gap-[30px] pl-[30px] pr-[21px]'}>
          <div>
            <RegistrationStep2
              className={'sm:max-h-[81px] sm:max-w-[81px] max-h-[50px] max-w-[50px]'}
            />
          </div>
          <h1 className={'sm:text-2xl text-xl sm:leading-[43px] leading-[26px] font-grotesk'}>
            plan your meals simply
          </h1>
        </div>
        <ul
          className={
            'flex flex-col gap-[18px] list-disc font-roboto sm:text-base text-[16px] sm:pl-[82px] pl-[42px] pr-[25px] max-w-[439px]'
          }
        >
          <li className={'leading-[25px]'}>Enter ingredients you have in your fridge</li>
          <li className={'leading-[25px]'}>Add some specificity to your search</li>
          <li className={'leading-[25px]'}>Get various recipes that match your request</li>
        </ul>
      </div>
      <div className={'flex justify-center mt-[40px]'}>
        <GoogleButton onClick={handleGoogleSignIn}>Continue with Google</GoogleButton>
      </div>
    </div>
  )
}

export default RegistrationOption
