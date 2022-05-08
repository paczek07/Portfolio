import React from 'react'

const About = () => {
    return (
        <section id="About">
            <div class="container flex flex-col px-4 mx-auto mt-5  space-y-12 md:space-y-0 md:flex-row" >

                <div class="flex flex-col justify-center space-y-12 md:w-1/2 ">
                    <h2 class="max-w-md text-5xl lg:text-6xl font-bold text-center md:text-left">
                        About me
                    </h2>
                    <div className="pr-5">
                        <p class="mb-5 text-left">
                            I am innovative and proactive person, also I'm a third year IT student specialising in software development, I have skills in front end and back end development, have some experience coding mobile applications and REST API services. 
                            I am very passionate about many other technology fields.<br/><br/>
                            Feel free to visit my other media and contact me.
                        </p>
                        <div class="grid grid-cols-3 gap-0 lg:w-1/2 items-center mb-10">
                            <a class="border-r-2 text-center" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
                            <a class="border-r-2 text-center" href='https://github.com/paczek07' target="_blank">GitHub</a>
                            <a class="text-center" href='www.linkedin.com' target="_blank">Blog</a>
                        </div>
                        <button class="p-3 px-6 pt-2 w-40 text-white rounded-full border-2  bg-gradient hover:bg-gradient-to-br from-gray-300 to-transparent  bg-opacity-20 shadow-xl ">Download CV</button>
                    </div>
                </div>


                <div class="flex flex-col justify-center space-y-8 md:w-1/2">
                    <h1 class="text-3xl text-center">My skills</h1>
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" >

                        <div class="rounded-l-full  md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div class="px-4 py-2 rounded-full md:py-1"  >
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
                                HTML,CSS and frameworks like Bootstrap and Tailwindcss, preprocessors like SASS and front end frameworks like React. <br/>
                                Handling back end with .NET, Java Spring boot and Java Jersey Framework with REST architecture.
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
                                iOS applications with swift<br/>
                                Hybrid applications with React Native.
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
                                    Other Tools
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Other Tools
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Different programming languages like PHP, Python. <br/>
                                Unit testing and Test Driven Development. <br/> 
                                CI/CD with Gitlab, Heroku and Jenkins.
                                Linux system administration.
                                Agile development.
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
                                Programming of microcontrollers with C, C++
                                among other things.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About