import React from 'react'


const GlobalDivRight= () => {
    return (
      <section className='bg-globeBlue w-[30rem] h-[30rem] flex items-start justify-start rounded-[50%] overflow-hidden '>     

<div className="flex items-center bg-[url(/images/globe.png)] bg-cover bg-center overflow-hidden animateEarthy  justify-center w-[100rem] h-[30rem] ">

</div>
      </section>
    )
  }


  const GlobalDivLeft= () => {
    return (
      <article className='flex gap-8 w-[40%] h-20rem items-start'> 

<div className="h-[26rem] bg-primaryPink flex-col flex">
<div className="lineDive border-solid h-[3.5rem] border-[.1px] rounded-md" >

</div>

<div className="dottedDiv border-dashed  h-[3.5rem] border-[.1px] rounded-md">

</div>



<div className="lineDive border-solid h-[3.5rem] border-[.1px] rounded-md" >

</div>

<div className="dottedDiv border-dashed  h-[3.5rem] border-[.1px] rounded-md">

</div>



<div className="lineDive border-solid h-[3.5rem] border-[.1px] rounded-md" >

</div>

<div className="dottedDiv border-dashed  h-[3.5rem] border-[.1px] rounded-md">

</div>



<div className="lineDive border-solid h-[3.5rem] border-[.1px] rounded-md" >

</div>

<div className="dottedDiv border-dashed  h-[3.5rem] border-[.1px] rounded-md">

</div>



<div className="lineDive border-solid h-[3.5rem] border-[.1px] rounded-md" >

</div>

<div className="dottedDiv border-dashed  h-[3.5rem] border-[.1px] rounded-md">

</div>




</div>

<div className="flex flex-col gap-[2rem]">
    
<div className="flex flex-col  gap-6">
    <h5 className='font-semibold text-xl text-primaryGreen' >30+ Currencies</h5>
<p className='font-normal text-lg'>We accept payments in more than 30 currencies</p>
</div>



<div className="flex flex-col gap-6">
    <h5 className='font-semibold text-xl' >20M+ API calls</h5>
<p className='font-normal text-lg'> API calls per day peaking at 231 requests per seccond</p>
</div>


<div className="flex flex-col gap-6">
    <h5 className='font-semibold text-xl'>500k+ Payments daily</h5>
<p className='font-normal text-lg'>Average number of payments processed daily</p>
</div>


<div className="flex flex-col gap-6">
    <h5 className='font-semibold text-xl'>15+ Payment Options</h5>

<div className="flex gap-4">
<div className='flex flex-col gap-2 text-lg '>

<p>
Debit and Credit cards
</p>
<p>
Mobile Money

</p>

<p>
M-Pessa
</p>
<p>
Bank Transfer
</p>
</div>
<div className='flex flex-col gap-2 text-lg' >

<p>
Bank Account
</p>  

<p>  POS</p>
<p>
VISA QR
</p>
<p>
USSD

</p>
</div>
</div>
</div>
</div>
      </article>
    )
  }

const GlobalReach = () => {
  return (
    <section className='flex gap-[6rem] justify-between flex-wrap  pt-[8rem] flex-col w-[95%]'>
<h4 className="text-5xl font-millik">
Our <span className='text-secondaryTextBlue'> global</span> reach

</h4>



<div className="flex w-[95%] justify-between items-center flex-wrap">
    
<GlobalDivLeft/>

<GlobalDivRight/>
</div>

    </section>
  )
}

export default GlobalReach