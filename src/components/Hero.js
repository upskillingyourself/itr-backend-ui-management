import React from 'react'
import Cards from '../pages/home/Cards'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <section className='py-2 ' id='home' style={{ backgroundColor: "rgba(244, 247, 250)" }}>
                <div className="container hero-margin">
                    <div className="row gy-4 gy-md-8 pt-9 pt-lg-0 ">
                        <div className="col-lg-5 text-center text-lg-start ">
                            <h1 className=" fw-bold mb-2 mb-lg-x1 lh-base mt-3 mt-lg-0"> File income tax return online here </h1>
                            <p className=" text-muted mb-3 mb-lg-4 lh-lg"> File income tax return online here .File income tax return online here.File income tax return online here </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Link to="/knowledge-center" className="btn btn-outline-primary btn-lg lh-xl mb-4 mb-md-5 mb-lg-7">More Here</Link></div>
                            <p className="mb-x1 fs-10 button-text text-uppercase fw-bold lh-base text-300">Download our app</p>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 position-relative z-2">
                                <Link to="" className="border-0 p-0 bg-transparent cursor-pointer rounded-1" >
                                    <img className="img-fluid" src="images/App_Store.webp" alt="images/logos/App_Store.webp" />
                                </Link>
                                <Link to="" className="border-0 p-0 bg-transparent cursor-pointer rounded-1" >
                                    <img className="img-fluid" src="images/Play_Store.webp" alt="images/logos/Play_Store.webp" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Cards />
                        </div>
                    </div>
                </div>

            </section>
      
    </div>
  )
}

export default Hero
