import React from 'react'

const About = () => {
    return (
        <section id="About">
            <div class="container flex flex-col px-4 mt-5 mx-auto space-y-12 md:space-y-0 md:flex-row " >

                <div class="flex flex-col justify-center space-y-12 md:w-1/2 ">
                    <h2 class=" text-5xl lg:text-8xl font-bold text-center md:text-left text-white">
                        About me
                    </h2>
                    <p class="text-center  md:max-w-sm md:text-left md:text-lg text-white">
                            I am a very cheerful and active person, currently I'm getting my IT bachelors degree at Vaasa University of applied sciences.<br/>
                            I'm passionate about technology, because of that I'm constantly learning new things about Electronics, maths and physics.
                    </p>
                </div>


                <div class="flex flex-col justify-center space-y-8 mx-10 md:w-1/2 md:bg-white md:rounded-lg md:py-10 md:bg-opacity-20 md:backdrop-filter md:backdrop-blur-lg ">

                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" >

                        <div class="rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg md:bg-transparent">
                            <div class="flex items-center justify-center">
                                <div class="px-4 py-2 font-bold text-white md:hidden md:py-1">
                                    01
                                </div>
                                <h3 class="font-bold text-white text-lg md:mb-4 md:hidden">
                                    Fullstack Development
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-2xl text-white font-bold md:block">
                                Fullstack Development
                            </h3>
                            <p class="text-white text-center md:text-left">
                                Frontend with HTML and CSS preprosessors like Sass, Css frameworks like Bootsrap and Tailwind.
                                Vanilla JS and frameworks like React and typescript.<br/>
                                Backend with REST and SOAP services with Java using frameworks like Spring boot and Jersey, I also know developing webservices with 
                                .Net 
                            </p>
                        </div>
                    </div>


                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div class="rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg md:bg-transparent">
                            <div class="flex items-center justify-center md:space-x-2">
                                <div class="px-4 py-2 font-bold text-white md:hidden md:py-1">
                                    02
                                </div>
                                <h3 class="font-bold text-white text-lg md:mb-4 md:hidden">
                                    Mobile Development
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Mobile Development
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Hybrid applications with react native and also fully native swift iOS, I'm also learning some kotlin for android applications
                            </p>
                        </div>
                    </div>


                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div class="rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg md:bg-transparent">
                            <div class="flex items-center justify-center">
                                <div class="px-4 py-2 font-bold text-white md:hidden md:py-1">
                                    03
                                </div>
                                <h3 class="font-bold text-white text-lg md:mb-4 md:hidden">
                                    Mobile Development
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-2xl font-bold text-white md:block">
                                Mobile Development
                            </h3>
                            <p class="text-white">
                                Native iOS swift applications.<br/>
                                Native android applications with Java and kotlin.<br/>
                                Hybrid applications with React native.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div class="rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-xl md:bg-transparent">
                            <div class="flex items-center justify-center">
                                <div class="px-4 py-2 font-bold text-white md:hidden md:py-1">
                                    04
                                </div>
                                <h3 class="font-bold text-white text-lg md:mb-4 md:hidden">
                                    Databases and other tools
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Electronics
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Stop jumping from one service to another to communicate, store
                                files, track tasks and share documents. Manage offers an
                                all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About