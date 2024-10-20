import React from 'react'

const ApiDocuentation = () => {
  return (
    <section className="w-[95%] flex flex-col ">
        <h3 className='text-4xl text-textBlack'>

        Well documented and easy-to-use <span className='text-primaryPink'>APIs</span> for 
        <span className="text-primaryPink">
        developers
        </span>
        </h3>

        <p>
        We have done the core payments integrations and abstractions, 
        so your team can easily integrate with our APIs and access
         multiple payment functionalities.
        </p>

        <ul className='list-none pl-6 circleList'>
            <li>Quick transfers</li>
            <li>Initiate one-time and recurring payments</li>
            <li>Payment verification</li>
            <li>Instant virtual cards creation</li>
            <li>Customer verification</li>
        </ul>



        <button className="primaryButtonColor w-[12rem] h-[4rem]">
            Read the Api Docs
        </button>
    </section>
  )
}

export default ApiDocuentation