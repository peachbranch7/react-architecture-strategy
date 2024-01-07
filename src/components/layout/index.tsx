import { FC, Suspense } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
