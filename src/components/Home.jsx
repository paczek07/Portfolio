import React from 'react'

const Home = () => {
    return (
        <section id="home" >
            {/* <img src="./images/hero.jpg" alt="background" class="w-full" /> */}
            <div class="flex flex-col justify-center items-left px-7 w-full h-screen ">
                <h1 className="mb-4 text-3xl text-gray-100 md:text-7xl">Hi,</h1>
                <h1 className="mb-7 text-3xl text-gray-100 md:text-6xl">
                    I&apos;m <span class="text-3xl md:text-6xl"> Aurelio 
                    <span class="text-3xl md:text-6xl wave-animate">👋</span>
                    </span>    
                </h1>
                <h1 className="mb-16 font-mono text-2xl text-gray-100 md:text-6xl">Software Developer</h1>
                <button class="p-3 px-6 pt-2 w-40 text-white rounded-full border-2  bg-gradient hover:bg-gradient-to-br from-gray-300 to-transparent  bg-opacity-20 shadow-xl ">Download CV</button>
            </div>
        </section>
    )
}

export default Home