import React from "react"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>
              <span>Aurelio</span> Menendez.
            </h1>
            <h3>Software Engineer</h3>
          </div>
          <div className='right row'>
            <div className='img'>
              <img src='./images/home.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home