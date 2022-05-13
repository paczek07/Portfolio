import React from 'react'

const About = () => {
    return (
        <section id="About">
            <div class="container flex flex-col px-4 mx-auto mt-5  space-y-12 md:space-y-0 md:flex-row " >

                <div class="flex flex-col justify-center space-y-12 md:w-1/2 ">
                    <h2 class="max-w-md text-5xl lg:text-8xl font-bold text-center md:text-left text-white">
                        About me
                    </h2>
                    <div className="grid sp p-2">
                       
                        <p class="max-w-sm text-left text-white">
                            I am a cheerful very active person, currently I'm getting my bachelors on information technology at Vaasa University of applied sciences.<br/>
                            Im very curious and dedicated person
                        </p>
                        
                    </div>
                </div>


                <div class="flex flex-col justify-center space-y-8 md:w-1/2 bg-white mx-10 rounded-lg py-10 bg-opacity-50 backdrop-filter backdrop-blur-lg ">

                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" >

                        <div class="rounded-l-full bg-red-300 md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"  >
                                    01
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
                                    Fullstack Development
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Fullstack Development
                            </h3>
                            <p class="text-darkGrayishBlue">
                                I am able to create full stack applicatiohashdashdashdashdash
                            </p>
                        </div>
                    </div>


                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div class="rounded-l-full bg-red-300 md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    02
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
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


                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div class="rounded-l-full bg-red-300 md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    03
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
                                    Mobile Development
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Mobile Development
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Stop jumping from one service to another to communicate, store
                                files, track tasks and share documents. Manage offers an
                                all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div class="rounded-l-full bg-red-300 md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    04
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
                                    Electronics
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