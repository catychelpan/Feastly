import Logo from '../assets/logo.png'
import LoggedInIcon from '../assets/logged_icon.svg?react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <header
      className={'sm:mt-[40px] sm:mb-0 sm:mx-[80px] mx-[28px] mt-[34px] flex justify-between'}
    >
      <Link to={'/'}>
        <img
          src={Logo}
          alt={'logo'}
          className={'max-w-[111px] w-full h-full max-h-[27px] lg:max-w-[138px] lg:max-h-[34px]'}
        />
      </Link>
      <div className={'flex gap-[7px] items-center'}>
        <p className={'font-roboto font-normal text-sm leading-[21px]'}>
          {isLoggedIn ? 'Logged In' : 'Logged Out'}
        </p>
        <LoggedInIcon />
      </div>
    </header>
  )
}

export default Header
