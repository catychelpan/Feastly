import RegistrationStep1 from '../assets/registration_step1.svg?react'
import { Link } from 'react-router-dom'

const NoRegistrationOption = () => {
  return (
    <div
      className={
        'bg-secondary py-[50px] rounded-[15px] sm:max-h-[609px] sm:max-w-[491px] max-w-[310px]'
      }
    >
      <div
        className={
          'max-h-[44px] whitespace-nowrap border-dark sm:rounded-[24px] rounded-[24px]' +
          ' mb-[40px] bg-white text-dark text-center sm:text-lg' +
          ' text-sm leading-[24px] border-[1px] py-[10px] sm:px-[25px] px-[15px] sm:ml-[94.5px] sm:mr-[85.5px] mx-[46px]'
        }
      >
        no registration needed
      </div>
      <div className={'flex flex-col sm:gap-[30px] gap-[25px]'}>
        <div
          className={
            'flex gap-[18px] sm:gap-[30px] sm:pl-[30px] items-start sm:pr-[21px] px-[21px] pr-[15px]'
          }
        >
          <div>
            <RegistrationStep1
              className={'sm:max-h-[81px] sm:max-w-[81px] max-h-[50px] max-w-[50px]'}
            />
          </div>
          <h1 className={'sm:text-2xl text-xl sm:leading-[43px] leading-[26px] font-grotesk'}>
            what&#39;s in your fridge
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
        <Link
          className={
            'sm:px-[61px] sm:py-[25px] py-[13px] px-[81px] rounded-[6px] flex bg-white font-roboto font-bold text-sm sm:text-lg leading-[21px] sm:leading-[29px]'
          }
          to={'/search'}
        >
          Get started
        </Link>
      </div>
    </div>
  )
}

export default NoRegistrationOption
