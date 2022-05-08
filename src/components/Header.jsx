import React from 'react'

const Header = () => {
    return (
        <nav class="absolute z-10  w-full mx-auto px-7 ">
            <div className="flex items-center justify-center md:justify-between p-3">
                <div className="hidden pt-2 md:block">AMS</div>

                <div className="space-x-11 flex">
                    <a href="#" class="hover:text-blue-600">Home</a>
                    <a href="#" class="hover:text-blue-600">About</a>
                    <a href="#" class="hover:text-blue-600">Projects</a>
                    <a href="#" class="hover:text-blue-600">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header