import React from 'react'
import Accordian from './ui/Accordian'


const Faq = () => {
  return (
    <section id='faq'className="py-5 bg-light ftco-faqs"  style={{minHeight:"100vh"}} >
      <div class="container" 
      // style={{marginTop:"80px",marginBottom:"80px"}}
      >
        <div className='mx-auto w-75 mb-5'>
          <h1 className='text-center '>Frequently Asks Questions</h1>
          <p className=' text-center mt-3 '>These Terms & Conditions govern your use of TORATAX website and services.
            By accessing or using our website or services, you agree to abide by the listed policy and terms & conditions
          </p>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <Accordian />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Faq
