import React from 'react'

const Contact = () => {
    return (
        <footer>
            <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div>
                        <img src="img/logo-white.svg" class="h-8" alt="AMS" />
                    </div>
                </div>

                <div class="flex flex-col justify-between">
                    <div class="text-white md:block">
                        *This website does not use coockies or gather any information from the visitors, also the contact form is just for demonstration purposes it does not perform any operations
                    </div>
                </div>
            </div>
            <div class="mx-auto my-6 text-center text-white ">
                        Copyright &copy; 2022, All Rights Reserved
            </div>
        </footer>
    )
}

export default Contact