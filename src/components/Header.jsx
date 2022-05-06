import React  from "react"

const Header = () => {
  return (
    <>
      <header>
        <div className='headerContainer flexSB'>
          <div className='logo'>
            <img src='./images/logo.png' alt='AMS' />
          </div>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Portfolio</a>
              </li>
              <li>
                <a href='/'>News</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </nav>
          <div >
            <i className='fas fa-bars'></i>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header