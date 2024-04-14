import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <section class="bg-home d-flex align-items-center" style={{height:"100vh"}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12 text-center">
                        <img src="images/404.svg" class="h-50 w-50"  alt=""/>
                        <div class="text-uppercase mt-4 display-3">Oh ! no</div>
                        <div class="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                        <p class="text-muted para-desc mx-auto">Start working with <span class="text-primary fw-bold">ToraTax</span> that can provide everything you need related to RTR .</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 text-center">  
                        {/* <a href="index.html" class="btn btn-outline-primary mt-4">Go Back</a> */}
                        <Link to="/" class="btn btn-primary mt-4 ms-2">Go To Home</Link>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default ErrorPage
