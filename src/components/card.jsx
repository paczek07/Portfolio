import React from 'react'

const card = ({ projectName, description, language1, language2 ,image}) => {
    return (
        <div id="app" class="h-60 rounded-lg shadow-lg flex transform transition duration-600 hover:scale-105">
            <a href="" target="_blank">
            <img class="hidden sm:block  w-60 h-full rounded-l-lg" src="https://bit.ly/2EApSiC" alt="Room" />

            </a>
            
            <div class="flex flex-col items-start justify-around p-4">
                <h3 class="text-md text-xl">{projectName}</h3>
                <h3 class="text-md  sm:hidden mg:hidden lg:hidden">{description}</h3>
                <h3 class="text-sm">Languages Used: {language1}, {language2}</h3>
            </div>
        </div>
    )
}

export default card