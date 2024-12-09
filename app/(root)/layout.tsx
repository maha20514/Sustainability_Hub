
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header />
      
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
        <div className="mx-auto w-full max-w-5xl">
          {children}
        </div>
      </section>

      <Footer/>

    </>
      


     
  )
}

export default Layout