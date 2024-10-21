import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Payments from './components/Payments'
import EcommerceStore from './components/EcommerceStore'
import EndlessPaymentPosibilities from './components/EndlessPaymentPosibilities'
import ApiDocuentation from './components/ApiDocuentation'
import GlobalReach from './components/GlobalReach'

const App = () => {
  return (
    <>
    <Header/>
    
    <Hero/>

<Payments/>

<EcommerceStore/>

<EndlessPaymentPosibilities/>

<ApiDocuentation/>


<GlobalReach/>
{/* 
   <div className="w-screen h-screen p-2 relative lg:mt-[10rem] md:mt-[80rem] mt-[30rem] flex flex-col gap[2rem]">


   </div> */}
   <div className="w-screen h-screen bg-textGreen relative"></div>
    </>
  )
}

export default App