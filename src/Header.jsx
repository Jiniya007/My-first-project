import React from 'react'

function Header() {
  return (
    <>
   <header>
    <section className='container main-hero-container '>
   <div className="row">
   <div className="col-12 col-lg-6 header-left-side
           d-flex justify-content-center flex-column align-items-start ">
     <h1 className="display-7"> Online Payment Made
     <br /> Easy For You.
     </h1>
     <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-2">
            <input type="text" className='rounded-pill w-50 me-3 p-2 form-control-text' 
            placeholder='Enter Your Email'/>

                <div className="input-group-button">Get it now</div>     
              </div>
    </div>
     {/* maine header right side */}
     <div className='"col-12 col-lg-6 header-right-side 
      d-flex justify-content-center align-items-center 
      main-herosection-image '>
         <img src="./images/hero1.jpg" alt="heroimg" 
        className='img-fluid  main-hero-section-img1' />
        <img src="./images/hero4.jpg" alt="heroimg" 
      className='img-fluid main-hero-section-img2'/>

     </div>
      </div>
    </section>
   </header>
    
    </>
  )
}

export default Header
