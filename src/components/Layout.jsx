import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import { Suspense } from 'react'

const Layout = () => {
  return (
    <div className={'max-w-[1440px] mx-auto'}>
      <Header />
      <Suspense fallback={<div>Loading ....</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Layout
